import classNames from "./style.module.scss";
import starIcon from "../../../assets/icons/star.svg";

function Rating() {
  return (
    <div className={classNames.rating}>
      {[1, 2, 3, 4, 5].map((i) => (
        <img src={starIcon} alt="rating" key={i} />
      ))}
    </div>
  );
}

export default Rating;
