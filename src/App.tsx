import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
