import { PrimaryButton } from "../UIKit/Button";
import Container from "../UIKit/Container";
import classNames from "./style.module.scss";
import cartIcon from "../../assets/icons/cart-outline.svg";
import logo from "../../assets/branding/logo.svg";
import Search from "../Search";

function Header() {
  const handleCartClick = () => {};

  return (
    <div className={classNames.header}>
      <Container>
        <div className={classNames.content}>
          <img src={logo} alt="lendo cart" />
          <div className={classNames.actions}>
            <Search />
            <PrimaryButton
              text="5600kr"
              icon={cartIcon}
              variant="light"
              onClick={handleCartClick}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
