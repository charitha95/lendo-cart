import classNames from "./style.module.scss";

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return <div className={classNames.container}>{children}</div>;
}

export default Container;
