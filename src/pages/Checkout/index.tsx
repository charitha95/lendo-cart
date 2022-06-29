import { PrimaryButton } from "../../components/UIKit/Button";
import Card from "../../components/UIKit/Card";
import Table from "../../components/UIKit/Table";
import classNames from "./style.module.scss";
import cartIcon from "../../assets/icons/cart-checked.svg";

function Checkout() {
  return (
    <div className={classNames["checkout-wrapper"]}>
      <h2>My Cart (10)</h2>
      <Card variant="light" classes="padding-45">
        <Table />
        <section>
          <p className={classNames.text}>SUB TOTAL</p>
          <p className={classNames.sub}>15120kr</p>
          <PrimaryButton
            text="Checkout"
            icon={cartIcon}
            variant="dark"
            quantity="10"
          />
        </section>
      </Card>
    </div>
  );
}

export default Checkout;
