import { Link } from "react-router-dom";
import Card from "../UIKit/Card";
import classNames from "./style.module.scss";
import couchImage from "../../assets/branding/couch.svg";
import arrowIcon from "../../assets/icons/arrow-blk.svg";
import { SecondaryButton } from "../UIKit/Button";

function Banner() {
  const handleLeanMoreClick = () => {};

  return (
    <div className={classNames["banner-wrapper"]}>
      <p>
        {`Good morning! it's a good day to shopping. 
      Hope you will find what you need!`}
      </p>
      <Card variant="dark">
        <div className={classNames.banner}>
          <section className={classNames.info}>
            <h2>BIG SALE</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <Link to="/sale">
              <SecondaryButton
                text="Learn more"
                icon={arrowIcon}
                variant="light"
                onClick={handleLeanMoreClick}
              />
            </Link>
          </section>
          <img
            className={classNames["promo-img"]}
            src={couchImage}
            alt="promotional banner"
          />
        </div>
      </Card>
    </div>
  );
}

export default Banner;
