import Container from "../UIKit/Container";
import classNames from "./style.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className={classNames.content}>
      <Container>{children}</Container>
    </div>
  );
}

export default Layout;
