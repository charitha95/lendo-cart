import { CartItem } from "../../../types";
import { CloseButton } from "../Button";
import ColorCircle from "../ColorCircle";
import classNames from "./style.module.scss";
import productImg from "../../../assets/images/ps4.png";
import Chip from "../Chip";
import QuantityInput from "../QuantityInput";

type TableProps = {
  headers: string[];
  tableItems: CartItem[];
  removeItem: (id: number, variant: string) => void;
  increase: (id: number, variant: string) => void;
  decrease: (id: number, variant: string) => void;
};

function Table({
  headers,
  tableItems,
  increase,
  decrease,
  removeItem
}: TableProps) {
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
        {tableItems.map((item) => (
          <tr key={`${item.id}-${item.variant}`}>
            <td className={classNames["product-info"]}>
              <div className={classNames["img-section"]}>
                <img src={productImg} alt="product" />
                <ColorCircle size="sm" variant={item.color} />
              </div>
              <div className={classNames["misc-info"]}>
                <p className={classNames.name}>{item.name}</p>
                <section>
                  <p>{item.color}</p>
                  <Chip
                    text={`${item.optionName} - ${item.variant.toString()}`}
                    variant="warning"
                  />
                </section>
              </div>
            </td>
            <td>{item.price}</td>
            <td>
              <QuantityInput
                maxQnt={item.maxQnt}
                onDecrement={() => {
                  decrease(item.id, item.variant.toString());
                }}
                onIncrement={() => {
                  increase(item.id, item.variant.toString());
                }}
                quantity={item.quantity}
              />
            </td>
            <td className={classNames.total}>{+item.price * item.quantity}</td>
            <td>
              <CloseButton
                onClick={() => removeItem(item.id, item.variant.toString())}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
