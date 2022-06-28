import Card from "../../components/UIKit/Card";
import Table from "../../components/UIKit/Table";
import classNames from "./style.module.scss";

function Checkout() {
  return (
    <div className={classNames["checkout-wrapper"]}>
      <h2>My Cart (10)</h2>
      <Card variant="light" classes="padding-45">
        <Table />
      </Card>
    </div>
  );
}

export default Checkout;
