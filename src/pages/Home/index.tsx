import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import ProductCard from "../../components/ProductCard";
import classNames from "./style.module.scss";
import data from "../../data/products.json";

function Home() {
  return (
    <>
      <Banner />
      <div className={`${classNames["product-list"]} grid`}>
        {data.items.map((product) => {
          return (
            <div
              className={`${classNames["prod-card"]} col-12 col-md-3`}
              key={product.id}
            >
              <Link to={`/detail/${product.id}`}>
                <ProductCard
                  brand={product.brand}
                  image={product.imgUrl}
                  name={product.name}
                  price={product.price}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
