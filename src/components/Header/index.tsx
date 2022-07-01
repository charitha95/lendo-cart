import { Link } from "react-router-dom";
import { PrimaryButton } from "../UIKit/Button";
import Container from "../UIKit/Container";
import classNames from "./style.module.scss";
import cartIcon from "../../assets/icons/cart-outline.svg";
import logo from "../../assets/branding/logo.svg";
import Search from "../Search";
import useCart from "../../hooks/useCart";
import formatCurrency from "../../helpers/formatCurrency";

function Header() {
  const { getCartQuantity, getTotal } = useCart();

  return (
    <div className={classNames.header} data-testid="header">
      <Container>
        <div className={classNames.content}>
          <Link to="/">
            <img src={logo} alt="lendo cart" />
          </Link>
          <div className={classNames.actions}>
            <Search />
            <Link to="/cart">
              <PrimaryButton
                text={formatCurrency(getTotal().toString())}
                icon={cartIcon}
                variant="light"
                quantity={getCartQuantity().toString()}
                testId="header-total"
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
