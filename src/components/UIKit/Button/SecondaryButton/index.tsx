import classNames from "./style.module.scss";

function SecondaryButton() {
  return (
    <button type="button" className={classNames["secondary-btn"]}>
      500kr
    </button>
  );
}

export default SecondaryButton;
