import { useLocation, useNavigate } from "react-router-dom";
import Container from "../UIKit/Container";
import classNames from "./style.module.scss";
import backArrow from "../../assets/icons/arrow-blk.svg";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={classNames.content}>
      <Container>
        {location.pathname !== "/" ? (
          <button
            type="button"
            className={classNames.back}
            onClick={() => navigate(-1)}
            data-testid="back-btn"
          >
            <img src={backArrow} alt="back" />
            <p>Back</p>
          </button>
        ) : null}
        {children}
      </Container>
    </div>
  );
}

export default Layout;
