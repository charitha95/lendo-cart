import Banner from "./components/Banner";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div>
      <Header />
      <MainContent>
        <Banner />
      </MainContent>
    </div>
  );
}

export default App;
