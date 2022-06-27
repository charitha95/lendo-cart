import Card from "../UIKit/Card";
import classNames from "./style.module.scss";
import arrowIcon from "../../assets/icons/arrow-light.svg";
import { SecondaryButton } from "../UIKit/Button";

type ProductCardProps = {
  image: string;
  name: string;
  price: string;
  brand: string;
  onClick: () => void;
};

function ProductCard({ image, name, price, brand, onClick }: ProductCardProps) {
  return (
    <>
      <Card variant="light" classes={classNames["product-card"]}>
        <img src={image} alt="product" />
      </Card>
      <section className={classNames.info}>
        <p className={classNames.name}>{name}</p>
        <p className={classNames.price}>{price}</p>
      </section>
      <section className={classNames.action}>
        <p className={classNames.brand}>{brand}</p>
        <SecondaryButton
          icon={arrowIcon}
          variant="dark"
          text="View"
          onClick={onClick}
        />
      </section>
    </>
  );
}

export default ProductCard;
