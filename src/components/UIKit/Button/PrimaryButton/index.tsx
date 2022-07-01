import { motion } from "framer-motion";
import Bubble from "../../Bubble";
import classNames from "./style.module.scss";

type PrimaryButtonProps = {
  text: string;
  icon: string;
  variant: "light" | "dark";
  quantity: string;
  disabled?: boolean;
  testId?: string;
  onClick?: () => void;
};

function PrimaryButton({
  text,
  icon,
  variant,
  quantity,
  disabled = false,
  testId,
  onClick
}: PrimaryButtonProps) {
  return (
    <motion.button
      type="button"
      className={`${classNames[variant]} ${classNames["primary-btn"]}`}
      onClick={onClick}
      disabled={disabled}
      data-testid={`${testId || "primary-button"}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={icon} alt="cart" />
      {text}
      <Bubble text={quantity} variant={variant === "light" ? "red" : "white"} />
    </motion.button>
  );
}

export default PrimaryButton;
