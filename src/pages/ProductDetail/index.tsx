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
import errorIcon from "../../assets/icons/error.svg";

type Variant = {
  name: string;
  values: string[] | number[];
};

function ProductDetail() {
  const [color, setColor] = useState("black" as Colors);
  const [quantity, setQuantity] = useState(0);
  const [variant, setVariant] = useState({} as Variant);
  const [maxQnt, setMaxQnt] = useState(0);
  const error = false;
  const canDecrement = quantity !== 0;
  const canIncrement = quantity < maxQnt;

  const product = {
    id: 1,
    name: "Philips hue bulb",
    brand: "Philips",
    price: "500",
    available: true,
    weight: 0.2,
    options: [
      { color: "white", power: [6.5, 9.5], quantity: 3 },
      { color: "red", power: [6.5, 11.5], quantity: 7 }
    ]
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // set color
    const option = product.options.filter((i) => i.color === e.target.value)[0];
    setColor(e.target.value as Colors);

    // set quantity
    // if newer option has less qnty than previously selected option
    if (quantity > option.quantity) setQuantity(option.quantity);
    setMaxQnt(option.quantity);

    // set variant (variant doesnt have a unique property in the given json, thus doing this)
    Object.values(option).forEach((val, ind) => {
      // ind !== 0 to make sure its not getting color,
      // color is always the first element of the object
      if (Array.isArray(val) && ind !== 0) {
        setVariant({
          name: Object.keys(option)[ind],
          values: val
        });
      }
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

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
          <ColorCircle size="lg" variant={color} />
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
              options={product.options.map((i) => i.color)}
              onChange={handleColorChange}
            />
            <Divider />
            {variant && // 👈 null and undefined check
            Object.keys(variant).length !== 0 ? (
              <RadioButtonGroup
                name={variant.name}
                options={variant.values}
                onChange={handleOptionChange}
              />
            ) : (
              <p className={classNames["empty-selection"]}>
                please select a color
              </p>
            )}

            <Divider />
            <p className={classNames.warning}>3 items already in the cart</p>
            <section className={classNames.action}>
              <div className={classNames.total}>
                <QuantityInput
                  maxQnt={maxQnt}
                  onDecrement={onDecrement}
                  onIncrement={onIncrement}
                  quantity={quantity}
                />
                <p>400kr</p>
              </div>
              {error ? (
                <p className={classNames.error}>
                  <img src={errorIcon} alt="error" /> Sorry! out of stock
                </p>
              ) : (
                <PrimaryButton
                  text="Add to cart"
                  icon={addToCartIcon}
                  variant="dark"
                  quantity={quantity.toString()}
                  onClick={() => {}}
                />
              )}
            </section>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
