import classNames from "./style.module.scss";

function SecondaryButton() {
  return (
    <button type="button" className={classNames["secondary-btn"]}>
      view
    </button>
  );
}

export default SecondaryButton;
