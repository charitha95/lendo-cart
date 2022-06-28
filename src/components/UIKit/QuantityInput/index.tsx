import classNames from "./style.module.scss";

type QuantityInputProps = {
  maxQnt: number;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
};
function QuantityInput({
  maxQnt,
  quantity,
  onIncrement,
  onDecrement
}: QuantityInputProps) {
  const canDecrement = quantity !== 0;
  const canIncrement = quantity < maxQnt;

  return (
    <div className={classNames.quantity}>
      <button type="button" disabled={!canDecrement} onClick={onDecrement}>
        -
      </button>
      <span>{quantity}</span>
      <button type="button" disabled={!canIncrement} onClick={onIncrement}>
        +
      </button>
    </div>
  );
}

export default QuantityInput;
