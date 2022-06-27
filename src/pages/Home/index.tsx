import Banner from "../../components/Banner";
import ProductCard from "../../components/ProductCard";
import classNames from "./style.module.scss";
import prodImage from "../../assets/images/ps4.png";

function Home() {
  return (
    <>
      <Banner />
      <div className={`${classNames["product-list"]} grid`}>
        <div className={`${classNames["prod-card"]} col-12 col-md-3`}>
          <ProductCard
            brand="Philips"
            image={prodImage}
            name="Philips hue bulb"
            price="290kr"
            onClick={() => {}}
          />
        </div>
        <div className={`${classNames["prod-card"]} col-12 col-md-3`}>
          <ProductCard
            brand="Philips"
            image={prodImage}
            name="Philips hue bulb"
            price="290kr"
            onClick={() => {}}
          />
        </div>
        <div className={`${classNames["prod-card"]} col-12 col-md-3`}>
          <ProductCard
            brand="Philips"
            image={prodImage}
            name="Philips hue bulb"
            price="290kr"
            onClick={() => {}}
          />
        </div>
        <div className={`${classNames["prod-card"]} col-12 col-md-3`}>
          <ProductCard
            brand="Philips"
            image={prodImage}
            name="Philips hue bulb"
            price="290kr"
            onClick={() => {}}
          />
        </div>
        <div className={`${classNames["prod-card"]} col-12 col-md-3`}>
          <ProductCard
            brand="Philips"
            image={prodImage}
            name="Philips hue bulb"
            price="290kr"
            onClick={() => {}}
          />
        </div>
        <div className={`${classNames["prod-card"]} col-12 col-md-3`}>
          <ProductCard
            brand="Philips"
            image={prodImage}
            name="Philips hue bulb"
            price="290kr"
            onClick={() => {}}
          />
        </div>
        <div className={`${classNames["prod-card"]} col-12 col-md-3`}>
          <ProductCard
            brand="Philips"
            image={prodImage}
            name="Philips hue bulb"
            price="290kr"
            onClick={() => {}}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
