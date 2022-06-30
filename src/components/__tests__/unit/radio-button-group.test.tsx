import { cleanup, render, screen } from "@testing-library/react";
import { RadioButtonGroup } from "../../UIKit/Button";

afterAll(cleanup);

describe("Radio Button Group Component", () => {
  it("should render the component with string values", () => {
    const data = [
      {
        color: "white",
        power: [6.5, 9.5],
        quantity: 3
      }
    ];
    render(
      <RadioButtonGroup
        name="color"
        options={data.map((i) => i.color)}
        onChange={() => {}}
      />
    );
    const component = screen.getByLabelText("white");
    expect(component).toBeInTheDocument();
  });

  it("should render the component with array values", () => {
    const data = [
      {
        color: ["white"],
        power: [6.5, 9.5],
        quantity: 3
      }
    ] as any;
    render(
      <RadioButtonGroup
        name="color"
        options={data.map((i: any) => i.color)}
        onChange={() => {}}
      />
    );
    const component = screen.getByLabelText("white");
    expect(component).toBeInTheDocument();
  });

  it("should render the component with multiple values", () => {
    const data = [
      {
        color: ["white"],
        power: [6.5, 9.5],
        quantity: 3
      },
      {
        color: ["red"],
        power: [6.5, 9.5],
        quantity: 3
      }
    ] as any;
    render(
      <RadioButtonGroup
        name="color"
        options={data.map((i: any) => i.color)}
        onChange={() => {}}
      />
    );
    const whiteOption = screen.getByLabelText("white");
    const redOption = screen.getByLabelText("red");
    expect(whiteOption).toBeInTheDocument();
    expect(redOption).toBeInTheDocument();
  });
});
