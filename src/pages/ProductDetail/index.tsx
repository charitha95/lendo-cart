import { useState } from "react";
import { RadioButtonGroup } from "../../components/UIKit/Button";
import ColorCircle from "../../components/UIKit/ColorCircle";
import classNames from "./style.module.scss";
import productImg from "../../assets/images/ps4.png";
import Card from "../../components/UIKit/Card";
import Rating from "../../components/UIKit/Rating";
import Divider from "../../components/UIKit/Divider";
import { Colors } from "../../types";
import QuantityInput from "../../components/UIKit/QuantityInput";

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
              options={["black", "white", "red", "orange", "green"]}
              onChange={handleColorChange}
            />
            <Divider />
            <RadioButtonGroup
              name="storage"
              options={["250", "500"]}
              onChange={() => {}}
            />
            <Divider />
            <QuantityInput
              maxQnt={4}
              onDecrement={onDecrement}
              onIncrement={onIncrement}
              quantity={quantity}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
