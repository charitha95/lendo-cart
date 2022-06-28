import ColorCircle from "../../components/UIKit/ColorCircle";
import classNames from "./style.module.scss";

function ProductDetail() {
  return (
    <div className={classNames["detail-wrapper"]}>
      <div className="grid">
        <div className="col-12 col-md-6">
          <ColorCircle size="lg" />
        </div>
        <div className="col-12 col-md-6">2</div>
      </div>
    </div>
  );
}

export default ProductDetail;
