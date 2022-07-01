import classNames from "./style.module.scss";

type BubbleProps = {
  text: string;
  variant: "white" | "red";
  testId?: string;
};

function Bubble({ text, variant, testId }: BubbleProps) {
  return (
    <span
      className={`${classNames[variant]} ${classNames.bubble}`}
      data-testid={`${testId || "bubble"}`}
    >
      {text}
    </span>
  );
}

export default Bubble;
