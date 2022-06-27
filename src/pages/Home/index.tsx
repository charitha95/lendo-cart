import Banner from "../../components/Banner";
import ProductCard from "../../components/ProductCard";

function Home() {
  return (
    <>
      <Banner />
      <div className="grid">
        <div className="col-12 col-md-3">
          <ProductCard />
        </div>
        <div className="col-12 col-md-3">2</div>
        <div className="col-12 col-md-3">3</div>
        <div className="col-12 col-md-3">4</div>
        <div className="col-12 col-md-3">5</div>
        <div className="col-12 col-md-3">6</div>
      </div>
    </>
  );
}

export default Home;
