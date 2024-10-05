import LeftSide from "./components/LeftSide";
import Main from "./components/Main";
import "./index.css";

function App() {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex ">
            <LeftSide />
            <Main />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
