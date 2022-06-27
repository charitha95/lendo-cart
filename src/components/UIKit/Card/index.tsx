import classNames from "./style.module.scss";

type CardProps = {
  children: React.ReactNode;
  variant: "dark" | "light";
};

function Card({ children, variant }: CardProps) {
  return (
    <div className={`${classNames[variant]} ${classNames.card}`}>
      {children}
    </div>
  );
}

export default Card;
