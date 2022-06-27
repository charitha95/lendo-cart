import { SecondaryButton } from "../UIKit/Button";
import Container from "../UIKit/Container";
import classNames from "./style.module.scss";

function Header() {
  return (
    <div className={classNames.header}>
      <Container>
        <div className={classNames.content}>
          <p>logo here</p>
          <SecondaryButton />
        </div>
      </Container>
    </div>
  );
}

export default Header;
