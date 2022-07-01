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
    <button
      type="button"
      className={`${classNames[variant]} ${classNames["primary-btn"]}`}
      onClick={onClick}
      disabled={disabled}
      data-testid={`${testId || "primary-button"}`}
    >
      <img src={icon} alt="cart" />
      {text}
      <Bubble text={quantity} variant={variant === "light" ? "red" : "white"} />
    </button>
  );
}

export default PrimaryButton;
