import crossIcon from "../../../../assets/icons/cross.svg";
import classNames from "./style.module.scss";

type CloseButtonProps = {
  onClick: () => void;
  testId?: string;
};

function CloseButton({ onClick, testId }: CloseButtonProps) {
  return (
    <button
      type="button"
      className={classNames["close-btn"]}
      onClick={onClick}
      data-testid={`${testId || "close-button"}`}
    >
      <img src={crossIcon} alt="close" />
    </button>
  );
}

export default CloseButton;
