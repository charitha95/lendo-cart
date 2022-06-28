import ColorCircle from "../ColorCircle";
import classNames from "./style.module.scss";
import productImg from "../../../assets/images/ps4.png";
import { Colors } from "../../../types";
import Chip from "../Chip";
import QuantityInput from "../QuantityInput";
import { CloseButton } from "../Button";

function Table() {
  const headers = ["Product", "Price", "Quantity", "Total", "Action"];
  const products = [
    {
      name: "PlayStation 4",
      price: 50,
      quantity: 5,
      color: "white" as Colors,
      variant: "500"
    },
    {
      name: "JBL Marsk",
      price: 540,
      quantity: 4,
      color: "green" as Colors,
      variant: "150"
    },
    {
      name: "SamSung TVC 43",
      price: 10,
      quantity: 1,
      color: "red" as Colors,
      variant: "250"
    },
    {
      name: "Walter Bottles",
      price: 550,
      quantity: 1,
      color: "black" as Colors,
      variant: "150"
    },
    {
      name: "Too good lol",
      price: 75,
      quantity: 2,
      color: "red" as Colors,
      variant: "75"
    }
  ];
  return (
    <table className={classNames.table}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.name}>
            <td className={classNames["product-info"]}>
              <div className={classNames["img-section"]}>
                <img src={productImg} alt="product" />
                <ColorCircle size="sm" variant={item.color} />
              </div>
              <div className={classNames["misc-info"]}>
                <p className={classNames.name}>{item.name}</p>
                <section>
                  <p>{item.color}</p>
                  <Chip text={item.variant} variant="warning" />
                </section>
              </div>
            </td>
            <td>{item.price}</td>
            <td>
              <QuantityInput
                maxQnt={0}
                onDecrement={() => {}}
                onIncrement={() => {}}
                quantity={3}
              />
            </td>
            <td className={classNames.total}>{item.price * item.quantity}</td>
            <td>
              <CloseButton />
            </td>
          </tr>
        ))}
      </tbody>
      {/* <tfoot>
        <tr>
          <td>Sum</td>
          <td>$180</td>
        </tr>
      </tfoot> */}
    </table>
  );
}

export default Table;
