import classNames from "./style.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};
function Layout({ children }: LayoutProps) {
  return (
    <div className={classNames.content}>
      <div className={classNames.container}>{children}</div>
    </div>
  );
}

export default Layout;
