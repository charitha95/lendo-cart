import { motion } from "framer-motion";
import { CartItem, Colors } from "../../../types";
import { CloseButton } from "../Button";

import ColorCircle from "../ColorCircle";
import classNames from "./style.module.scss";
import Chip from "../Chip";
import QuantityInput from "../QuantityInput";
import formatCurrency from "../../../helpers/formatCurrency";
import emptyCartIcon from "../../../assets/icons/empty.svg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const listItem = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

type TableProps = {
  headers: string[];
  tableItems: CartItem[];
  removeItem: (id: number, variant: string, color: Colors) => void;
  increase: (id: number, variant: string, color: Colors) => void;
  decrease: (id: number, variant: string, color: Colors) => void;
};

function Table({
  headers,
  tableItems,
  increase,
  decrease,
  removeItem
}: TableProps) {
  if (tableItems.length === 0)
    return (
      <div className={classNames.empty}>
        <img src={emptyCartIcon} alt="empty car" data-testid="empty-img" />
      </div>
    );

  return (
    <table className={classNames.table}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <motion.tbody
        data-testid="cart-items"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {tableItems.map((item) => (
          <motion.tr
            key={`${item.id}-${item.variant}-${item.color}`}
            className={`${
              item.quantity === 0 ? classNames["stike-though"] : null
            }`}
            data-testid="table-items-tr"
            variants={listItem}
          >
            <td className={classNames["product-info"]}>
              <div className={classNames["img-section"]}>
                <img src={item.imgUrl} alt="product" />
                <ColorCircle size="sm" variant={item.color} />
              </div>
              <div className={classNames["misc-info"]}>
                <p className={classNames.name} data-testid="cart-item-name">
                  {item.name}
                </p>
                <section>
                  <p
                    className={`${
                      item.quantity === 0 ? classNames["stike-though"] : null
                    }`}
                  >
                    {item.color}
                  </p>
                  {item.optionName ? (
                    <Chip
                      text={`${item.optionName} - ${item.variant.toString()}`}
                      variant="warning"
                    />
                  ) : null}
                </section>
              </div>
            </td>
            <td>{formatCurrency(item.price)}</td>
            <td>
              <QuantityInput
                maxQnt={item.maxQnt}
                onDecrement={() => {
                  decrease(item.id, item.variant.toString(), item.color);
                }}
                onIncrement={() => {
                  increase(item.id, item.variant.toString(), item.color);
                }}
                quantity={item.quantity}
              />
            </td>
            <td className={classNames.total} data-testid="cart-item-price">
              {formatCurrency((+item.price * item.quantity).toString())}
            </td>
            <td>
              <CloseButton
                onClick={() =>
                  removeItem(item.id, item.variant.toString(), item.color)
                }
              />
            </td>
          </motion.tr>
        ))}
      </motion.tbody>
    </table>
  );
}

export default Table;
