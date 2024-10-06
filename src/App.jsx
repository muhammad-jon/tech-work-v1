import LeftSide from "./components/LeftSide";
import Main from "./components/Main";
import Nav from "./components/Nav/Nav";
import "./index.css";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <section>
        <div className="container">
          <div className="wrap">
            <LeftSide />
            <Main />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
