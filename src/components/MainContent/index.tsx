import Container from "../UIKit/Container";
import classNames from "./style.module.scss";

type MainContentProps = {
  children: React.ReactNode;
};

function MainContent({ children }: MainContentProps) {
  return (
    <div className={classNames.content}>
      <Container>{children}</Container>
    </div>
  );
}

export default MainContent;
