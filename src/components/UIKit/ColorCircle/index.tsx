import classNames from "./style.module.scss";

type ColorCircleProps = {
  size: "sm" | "md" | "lg";
};

function ColorCircle({ size }: ColorCircleProps) {
  return <span className={`${classNames.circle} ${classNames[size]}`} />;
}

export default ColorCircle;
