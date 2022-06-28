import crossIcon from "../../../../assets/icons/cross.svg";
import classNames from "./style.module.scss";

function CloseButton() {
  return (
    <button type="button" className={classNames["close-btn"]}>
      <img src={crossIcon} alt="close" />
    </button>
  );
}

export default CloseButton;
