import { Link } from "react-router-dom";
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
          <Link to="/">
            <img src={logo} alt="lendo cart" />
          </Link>
          <div className={classNames.actions}>
            <Search />
            <PrimaryButton
              text="5600kr"
              icon={cartIcon}
              variant="light"
              quantity="5"
              onClick={handleCartClick}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
