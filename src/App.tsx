import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";
import CartProvider from "./contexts/CartContext";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
