import { useState } from "react";
import { PrimaryButton, RadioButtonGroup } from "../../components/UIKit/Button";
import { Colors } from "../../types";
import ColorCircle from "../../components/UIKit/ColorCircle";
import classNames from "./style.module.scss";
import productImg from "../../assets/images/ps4.png";
import Card from "../../components/UIKit/Card";
import Rating from "../../components/UIKit/Rating";
import Divider from "../../components/UIKit/Divider";
import QuantityInput from "../../components/UIKit/QuantityInput";
import addToCartIcon from "../../assets/icons/cart-add-light.svg";

function ProductDetail() {
  const [circleColor, setCircleColor] = useState("black" as Colors);
  const [quantity, setQuantity] = useState(0);
  const maxQnt = 4;
  const canDecrement = quantity !== 0;
  const canIncrement = quantity < maxQnt;

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCircleColor(e.target.value as Colors);
  };

  const onIncrement = () => {
    if (canIncrement) {
      setQuantity(quantity + 1);
    }
  };

  const onDecrement = () => {
    if (canDecrement) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={classNames["detail-wrapper"]}>
      <div className="grid">
        <div className={`${classNames["img-section"]} col-12 col-md-6`}>
          <img src={productImg} alt="product" />
          <ColorCircle size="lg" variant={circleColor} />
        </div>
        <div className={`${classNames["info-section"]} col-12 col-md-6`}>
          <Card variant="light" classes="padding-45">
            <p className={classNames.brand}>Sony</p>
            <div className={classNames.block}>
              <h2 className={classNames.name}>Playstation 4</h2>
              <p className={classNames.price}>1500kr</p>
            </div>
            <div className={classNames.review}>
              <Rating />
              <p>155 reviews</p>
            </div>
            <p className={classNames.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
            <Divider />
            <RadioButtonGroup
              name="color"
              options={["black", "white"]}
              onChange={handleColorChange}
            />
            <Divider />
            <RadioButtonGroup
              name="storage"
              options={["250", "500"]}
              onChange={() => {}}
            />
            <Divider />
            <p className={classNames.warning}>3 items already in the cart</p>
            <section className={classNames.action}>
              <div className={classNames.total}>
                <QuantityInput
                  maxQnt={4}
                  onDecrement={onDecrement}
                  onIncrement={onIncrement}
                  quantity={quantity}
                />
                <p>400kr</p>
              </div>
              <PrimaryButton
                text="Add to cart"
                icon={addToCartIcon}
                variant="dark"
                quantity={quantity.toString()}
                onClick={() => {}}
              />
            </section>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
