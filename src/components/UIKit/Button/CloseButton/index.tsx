import { motion } from "framer-motion";
import crossIcon from "../../../../assets/icons/cross.svg";
import classNames from "./style.module.scss";

type CloseButtonProps = {
  onClick: () => void;
};

function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <motion.button
      type="button"
      className={classNames["close-btn"]}
      onClick={onClick}
      data-testid="close-button"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <img src={crossIcon} alt="close" />
    </motion.button>
  );
}

export default CloseButton;
