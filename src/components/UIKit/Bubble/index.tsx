import classNames from "./style.module.scss";

type BubbleProps = {
  text: string;
  variant: "white" | "red";
};

function Bubble({ text, variant }: BubbleProps) {
  return (
    <span className={`${classNames[variant]} ${classNames.bubble}`}>
      {text}
    </span>
  );
}

export default Bubble;
