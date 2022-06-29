import { PrimaryButton } from "../../components/UIKit/Button";
import Card from "../../components/UIKit/Card";
import Table from "../../components/UIKit/Table";
import classNames from "./style.module.scss";
import cartIcon from "../../assets/icons/cart-checked.svg";
import useCart from "../../hooks/useCart";
import formatCurrency from "../../helpers/formatCurrency";

function Checkout() {
  const {
    getCartItems,
    getTotal,
    getCartQuantity,
    removeCartItem,
    increaseQuantity,
    decreaseQuantity
  } = useCart();
  const headers = ["Product", "Price", "Quantity", "Total", "Action"];

  return (
    <div className={classNames["checkout-wrapper"]}>
      <h2>My Cart ({getCartQuantity().toString()})</h2>
      <Card variant="light" classes="padding-45">
        <Table
          headers={headers}
          tableItems={getCartItems()}
          removeItem={removeCartItem}
          increase={increaseQuantity}
          decrease={decreaseQuantity}
        />
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
