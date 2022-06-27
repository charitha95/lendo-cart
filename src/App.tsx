import classNames from "./app.module.scss";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout />
      <p className={classNames.appStyle}>hi</p>
    </>
  );
}

export default App;
