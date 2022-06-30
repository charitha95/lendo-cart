import { cleanup, screen, render } from "@testing-library/react";
import Bubble from "../../UIKit/Bubble";

afterAll(cleanup);

describe("Bubble Component", () => {
  render(<Bubble text="5" variant="red" />);
  const bubble = screen.getByTestId("bubble");

  it("should render the component", () => {
    expect(bubble).toBeInTheDocument();
  });

  it("should display the provided text", () => {
    expect(bubble).toHaveTextContent("5");
  });
});
