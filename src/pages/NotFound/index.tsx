import notFoundImg from "../../assets/icons/404.svg";
import classNames from "./style.module.scss";

function NotFound() {
  return (
    <div className={classNames["not-found"]}>
      <img src={notFoundImg} alt="" />
    </div>
  );
}

export default NotFound;
