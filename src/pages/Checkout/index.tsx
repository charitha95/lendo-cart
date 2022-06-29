import { useState, useEffect } from "react";
import { PrimaryButton } from "../../components/UIKit/Button";
import { TableItem } from "../../types";
import Card from "../../components/UIKit/Card";
import Table from "../../components/UIKit/Table";
import classNames from "./style.module.scss";
import cartIcon from "../../assets/icons/cart-checked.svg";
import useCart from "../../hooks/useCart";
import formatCurrency from "../../helpers/formatCurrency";
import data from "../../data/products.json";

function Checkout() {
  const { getCartItems, getTotal, getCartQuantity } = useCart();
  const headers = ["Product", "Price", "Quantity", "Total", "Action"];
  const [tableItems, setTableItems] = useState<TableItem[]>([]);

  useEffect(() => {
    const formattedItems = [] as TableItem[];
    getCartItems().forEach((cartItem) => {
      const item = data.items.find((i) => i.id === cartItem.id);
      if (item) {
        formattedItems.push({
          id: item.id,
          color: cartItem.color,
          name: item.name,
          price: item.price,
          quantity: cartItem.quantity,
          variant: cartItem.variant
        });
      }
    });
    setTableItems(formattedItems);
  }, [getCartItems]);

  return (
    <div className={classNames["checkout-wrapper"]}>
      <h2>My Cart (10)</h2>
      <Card variant="light" classes="padding-45">
        <Table headers={headers} tableItems={tableItems} />
        <section>
          <p className={classNames.text}>SUB TOTAL</p>
          <p className={classNames.sub}>
            {formatCurrency(getTotal().toString())}
          </p>
          <PrimaryButton
            text="Checkout"
            icon={cartIcon}
            variant="dark"
            quantity={getCartQuantity().toString()}
          />
        </section>
      </Card>
    </div>
  );
}

export default Checkout;
