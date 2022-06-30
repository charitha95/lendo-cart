import classNames from "./style.module.scss";
import checkIcon from "../../../assets/icons/check.svg";

type ToastProps = {
  text: string;
  showToast?: boolean;
};

function Toast({ text, showToast = false }: ToastProps) {
  return (
    <div className={`${classNames.toast} ${showToast ? "" : classNames.hide}`}>
      <img src={checkIcon} alt="check" />
      <p>{text}</p>
    </div>
  );
}

export default Toast;
