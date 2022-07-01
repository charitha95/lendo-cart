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
    <button
      type="button"
      className={`${classNames[variant]} ${classNames["secondary-btn"]} ${classes}`}
      onClick={onClick}
      data-testid={`${testId || "secondary-button"}`}
    >
      {text}
      <img src={icon} alt="cart" />
    </button>
  );
}

export default SecondaryButton;
