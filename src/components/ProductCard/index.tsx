import Card from "../UIKit/Card";
import classNames from "./style.module.scss";
import arrowIcon from "../../assets/icons/arrow-light.svg";
import { SecondaryButton } from "../UIKit/Button";
import formatCurrency from "../../helpers/formatCurrency";
import Chip from "../UIKit/Chip";

type ProductCardProps = {
  image: string;
  name: string;
  price: string;
  brand: string;
  availabile: boolean;
};

function ProductCard({
  image,
  name,
  price,
  brand,
  availabile
}: ProductCardProps) {
  return (
    <div className={classNames["product-wrapper"]} data-testid="product">
      <Card variant="light" classes={classNames["product-card"]}>
        <img src={image} alt="product" />
        {!availabile ? <Chip text="out of stock" variant="danger" /> : null}
      </Card>
      <div className={classNames["hover-card"]}>
        <section className={classNames.info}>
          <p className={classNames.name}>{name}</p>
          <p className={classNames.price}>{formatCurrency(price)}</p>
        </section>
        <section className={classNames.action}>
          <p className={classNames.brand}>{brand}</p>
          <SecondaryButton
            icon={arrowIcon}
            variant="dark"
            text="View"
            onClick={() => {}}
            classes={classNames["action-btn"]}
          />
        </section>
      </div>
    </div>
  );
}

export default ProductCard;
