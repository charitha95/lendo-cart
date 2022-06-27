import classNames from "./style.module.scss";

type SecondaryButtonProps = {
  text: string;
  icon: string;
  variant: "light" | "dark";
  onClick: () => void;
};

function SecondaryButton({
  text,
  icon,
  variant,
  onClick
}: SecondaryButtonProps) {
  return (
    <button
      type="button"
      className={`${classNames[variant]} ${classNames["primary-btn"]}`}
      onClick={onClick}
    >
      {text}
      <img src={icon} alt="cart" />
    </button>
  );
}

export default SecondaryButton;
