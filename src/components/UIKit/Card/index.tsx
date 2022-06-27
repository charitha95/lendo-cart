import classNames from "./style.module.scss";

type CardProps = {
  children?: React.ReactNode;
  variant: "dark" | "light";
  classes?: string;
};

function Card({ children, variant, classes = "" }: CardProps) {
  return (
    <div className={`${classNames[variant]} ${classNames.card} ${classes}`}>
      {children}
    </div>
  );
}

export default Card;
