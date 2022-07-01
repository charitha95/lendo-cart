import crossIcon from "../../../../assets/icons/cross.svg";
import classNames from "./style.module.scss";

type CloseButtonProps = {
  onClick: () => void;
};

function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button
      type="button"
      className={classNames["close-btn"]}
      onClick={onClick}
      data-testid="close-button"
    >
      <img src={crossIcon} alt="close" />
    </button>
  );
}

export default CloseButton;
