import classNames from "./style.module.scss";

type ChipProps = {
  text: string;
  variant: "warning" | "danger" | "info";
};

function Chip({ text, variant }: ChipProps) {
  return (
    <div
      className={`${classNames.chip} ${classNames[variant]}`}
      data-testid="chip"
    >
      {text}
    </div>
  );
}

export default Chip;
