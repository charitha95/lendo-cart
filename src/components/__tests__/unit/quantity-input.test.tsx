import { cleanup, render, screen } from "@testing-library/react";
import QuantityInput from "../../UIKit/QuantityInput";

afterAll(cleanup);

describe("Quantity Input Component", () => {
  it("should render the component", () => {
    render(
      <QuantityInput
        maxQnt={3}
        onDecrement={() => {}}
        onIncrement={() => {}}
        quantity={2}
      />
    );
    const component = screen.getByTestId("quantity-input");
    expect(component).toBeInTheDocument();
  });

  it("should disable the increment button", () => {
    render(
      <QuantityInput
        maxQnt={3}
        onDecrement={() => {}}
        onIncrement={() => {}}
        quantity={3}
      />
    );
    const component = screen.getByTestId("quantity-increment");
    expect(component).toHaveAttribute("disabled");
  });

  it("should disable the decrement button", () => {
    render(
      <QuantityInput
        maxQnt={3}
        onDecrement={() => {}}
        onIncrement={() => {}}
        quantity={0}
      />
    );
    const component = screen.getByTestId("quantity-decrement");
    expect(component).toHaveAttribute("disabled");
  });
});
