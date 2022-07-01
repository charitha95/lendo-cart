import { motion } from "framer-motion";
import classNames from "./style.module.scss";

type SecondaryButtonProps = {
  text: string;
  icon: string;
  variant: "light" | "dark";
  classes?: string;
  testId?: string;
  onClick?: () => void;
};

function SecondaryButton({
  text,
  icon,
  variant,
  classes,
  testId,
  onClick
}: SecondaryButtonProps) {
  return (
    <motion.button
      type="button"
      className={`${classNames[variant]} ${classNames["secondary-btn"]} ${classes}`}
      onClick={onClick}
      data-testid={`${testId || "secondary-button"}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
      <img src={icon} alt="cart" />
    </motion.button>
  );
}

export default SecondaryButton;
