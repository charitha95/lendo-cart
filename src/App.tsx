import Header from "./components/Header";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
