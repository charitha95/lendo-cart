import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  PrimaryButton,
  RadioButtonGroup,
  SecondaryButton
} from "../../components/UIKit/Button";
import { Colors, Product } from "../../types";
import ColorCircle from "../../components/UIKit/ColorCircle";
import classNames from "./style.module.scss";
import Card from "../../components/UIKit/Card";
import Rating from "../../components/UIKit/Rating";
import Divider from "../../components/UIKit/Divider";
import QuantityInput from "../../components/UIKit/QuantityInput";
import addToCartIcon from "../../assets/icons/cart-add-light.svg";
import errorIcon from "../../assets/icons/error.svg";
import weightIcon from "../../assets/icons/weight.svg";
import arrowIcon from "../../assets/icons/arrow-light.svg";
import data from "../../data/products.json";
import formatCurrency from "../../helpers/formatCurrency";
import useCart from "../../hooks/useCart";

type Variant = {
  name: string;
  values: string[] | number[];
};

function ProductDetail() {
  const { addToCart, getCartItemById } = useCart();

  const [color, setColor] = useState("" as Colors);
  const [quantity, setQuantity] = useState(0);
  const [maxQnt, setMaxQnt] = useState(0);
  const [variant, setVariant] = useState({} as Variant);
  const [selectedVariant, setSelectedVariant] = useState("");
  const [variantError, setVariantError] = useState(false);
  const [product, setProduct] = useState({} as Product);

  const canDecrement = quantity !== 0;
  const canIncrement = quantity < maxQnt;

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setProduct(data.items[+id - 1]);
      console.log(getCartItemById(+id)[0]);
    }
  }, [id, product]);

  const setQuantityStates = (e: React.ChangeEvent<HTMLInputElement>) => {
    // set quantity
    const option = product.options.filter((i: any) => {
      // sometimes color placed inside of an array
      if (Array.isArray(i.color)) return i.color[0] === e.target.value;
      return i.color === e.target.value;
    })[0];
    // if newer option has less qnty than previously selected option
    if (quantity > option.quantity) setQuantity(option.quantity);
    setMaxQnt(option.quantity);

    return option;
  };

  const setOptionsStates = (option: any) => {
    // set options (options doesnt have a unique property in the given json, thus doing this)
    // check weather product has options/variant
    if (Object.keys(option).length > 2) {
      // setting the variant/options
      Object.values(option).forEach((val, indx) => {
        // indx !== 0 to make sure its not getting color,
        // color is always the first element of the object
        if (Array.isArray(val) && indx !== 0) {
          setVariant({
            name: Object.keys(option)[indx],
            values: val
          });
        }
      });
      setVariantError(false);
    } else {
      setVariantError(true);
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // set color
    setColor(e.target.value as Colors);

    // set quantity
    const option = setQuantityStates(e);

    // set options
    setOptionsStates(option);
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedVariant(e.target.value);
  };

  const onIncrement = () => {
    if (canIncrement) setQuantity(quantity + 1);
  };

  const onDecrement = () => {
    if (canDecrement) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    addToCart({
      color,
      id: product.id,
      quantity,
      variant: selectedVariant
    });
  };

  const renderOptions = () => {
    if (variantError) {
      return (
        <p className={classNames["empty-selection"]}>no options available</p>
      );
    }
    if (variant && Object.keys(variant).length !== 0) {
      return (
        <RadioButtonGroup
          name={variant.name}
          options={variant.values}
          onChange={handleOptionChange}
        />
      );
    }
    return (
      <p className={classNames["empty-selection"]}>please select a color</p>
    );
  };

  const renderActions = () => {
    if (!product.available) {
      return (
        <p className={classNames.error}>
          <img src={errorIcon} alt="error" /> Sorry! out of stock
        </p>
      );
    }
    if (
      id &&
      getCartItemById(+id)[0].color === color &&
      getCartItemById(+id)[0].variant === selectedVariant
    ) {
      return (
        <SecondaryButton variant="dark" icon={arrowIcon} text="View in cart" />
      );
    }
    return (
      <PrimaryButton
        text="Add to cart"
        icon={addToCartIcon}
        variant="dark"
        quantity={quantity.toString()}
        onClick={handleAddToCart}
        disabled={quantity === 0 || (!selectedVariant && !variantError)}
      />
    );
  };

  return (
    <div className={classNames["detail-wrapper"]}>
      <div className="grid">
        <div className={`${classNames["img-section"]} col-12 col-md-6`}>
          <img src={product.imgUrl} alt="product" />
          <ColorCircle size="lg" variant={color} />
        </div>
        {product.options ? (
          <div className={`${classNames["info-section"]} col-12 col-md-6`}>
            <Card variant="light" classes="padding-45">
              <p className={classNames.brand}>{product.brand}</p>
              <div className={classNames.block}>
                <h2 className={classNames.name}>{product.name}</h2>
                <p className={classNames.price}>
                  {formatCurrency(product.price)}
                </p>
              </div>
              <div className={classNames.review}>
                <Rating />
                <p>155 reviews</p>
                <img
                  src={weightIcon}
                  alt="weight"
                  className={classNames.weight}
                />
                <p>{product.weight}kg</p>
              </div>
              <p className={classNames.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
              <Divider />
              <RadioButtonGroup
                name="color"
                options={product.options.map((i: any) => i.color)}
                onChange={handleColorChange}
              />
              <Divider />
              {renderOptions()}
              <Divider />
              {/* <p className={classNames.warning}>3 items already in the cart</p> */}
              {!variantError &&
              Object.keys(variant).length > 0 &&
              !selectedVariant ? (
                <p className={classNames.danger}>
                  please select an option from above
                </p>
              ) : null}
              <section className={classNames.action}>
                <div className={classNames.total}>
                  <QuantityInput
                    maxQnt={maxQnt}
                    onDecrement={onDecrement}
                    onIncrement={onIncrement}
                    quantity={quantity}
                  />
                  <p>
                    {formatCurrency((quantity * +product.price).toString())}
                  </p>
                </div>
                {renderActions()}
              </section>
            </Card>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProductDetail;
