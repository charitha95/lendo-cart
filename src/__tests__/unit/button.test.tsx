import { cleanup, render, screen } from "@testing-library/react";
import { PrimaryButton } from "../../components/UIKit/Button";
import icon from "../../../assets/icons/arrow-blk.svg";

afterAll(cleanup);

describe("Button Components", () => {
  // primary btn
  render(
    <PrimaryButton
      icon={icon}
      quantity="5"
      text="Add to cart"
      variant="dark"
      disabled={false}
      onClick={() => {}}
    />
  );
  const primaryBtn = screen.getByTestId("primary-button");

  it("should render the primary button", () => {
    expect(primaryBtn).toBeInTheDocument();
  });

  it("should contain the provided text", () => {
    expect(primaryBtn).toHaveTextContent("Add to cart");
  });

  it("should disable the button", () => {
    render(
      <PrimaryButton
        icon={icon}
        quantity="5"
        text="Add to cart"
        variant="dark"
        disabled
        onClick={() => {}}
      />
    );
    const disabledPrimaryBtn = screen.getByTestId("primary-button");
    expect(disabledPrimaryBtn).toHaveAttribute("disabled");
  });

  it.todo("should test secondary button");
  it.todo("should test close button");
});
