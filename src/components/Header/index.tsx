import { PrimaryButton } from "../UIKit/Button";
import Container from "../UIKit/Container";
import classNames from "./style.module.scss";
import cartIcon from "../../assets/icons/cart-outline.svg";
import logo from "../../assets/branding/logo.svg";

function Header() {
  const handleClick = () => {};

  return (
    <div className={classNames.header}>
      <Container>
        <div className={classNames.content}>
          <img src={logo} alt="lendo cart" />
          <PrimaryButton
            text="5600kr"
            icon={cartIcon}
            variant="light"
            onClick={handleClick}
          />
        </div>
      </Container>
    </div>
  );
}

export default Header;
