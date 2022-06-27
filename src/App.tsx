import classNames from "./app.module.scss";
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <p className={classNames.appStyle}>hi</p>
      </Layout>
    </>
  );
}

export default App;
