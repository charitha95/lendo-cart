import classNames from "./style.module.scss";

type SecondaryButtonProps = {
  text: string;
  icon: string;
  variant: "light" | "dark";
  classes?: string;
  onClick?: () => void;
};

function SecondaryButton({
  text,
  icon,
  variant,
  classes,
  onClick
}: SecondaryButtonProps) {
  return (
    <button
      type="button"
      className={`${classNames[variant]} ${classNames["secondary-btn"]} ${classes}`}
      onClick={onClick}
      data-testid="secondary-button"
    >
      {text}
      <img src={icon} alt="cart" />
    </button>
  );
}

export default SecondaryButton;
