import Bubble from "../../Bubble";
import classNames from "./style.module.scss";

type PrimaryButtonProps = {
  text: string;
  icon: string;
  variant: "light" | "dark";
  onClick: () => void;
};

function PrimaryButton({ text, icon, variant, onClick }: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className={`${classNames[variant]} ${classNames["primary-btn"]}`}
      onClick={onClick}
    >
      <img src={icon} alt="cart" /> {text}
      <Bubble text="5" variant={variant === "light" ? "red" : "white"} />
    </button>
  );
}

export default PrimaryButton;
