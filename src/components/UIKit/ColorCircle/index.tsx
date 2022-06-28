import { Colors } from "../../../types";
import classNames from "./style.module.scss";

type ColorCircleProps = {
  size: "sm" | "md" | "lg";
  variant: Colors;
};

function ColorCircle({ size, variant }: ColorCircleProps) {
  return (
    <span
      className={`${classNames.circle} ${classNames[size]} ${classNames[variant]}`}
    />
  );
}

export default ColorCircle;
