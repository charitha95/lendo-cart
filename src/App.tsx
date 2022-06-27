import Banner from "./components/Banner";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div>
      <Header />
      <MainContent>
        <Banner />
        <div className="grid">
          <div className="col-12 col-md-8">Im a column 2/3 wide</div>
          <div className="col-12 col-md-4">Im a column 1/3 wide</div>
        </div>
      </MainContent>
    </div>
  );
}

export default App;
