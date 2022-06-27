import Container from "../UIKit/Container";
import classNames from "./style.module.scss";

function Header() {
  return (
    <div className={classNames.header}>
      <Container>
        <p>hellow</p>
      </Container>
    </div>
  );
}

export default Header;
