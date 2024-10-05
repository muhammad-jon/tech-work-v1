import { sideCards } from "../assets/constants";
import Card from "./Card/Card";

const LeftSide = () => {
  return (
    <div className="side">
      <div>
        <h1>{"Скидки дня"}</h1>
        <p className="subtitle">
          <b>{`${"23"} предложения`}</b>
        </p>
      </div>
      <div className="side-cards">
        {sideCards.map((el) => (
          <Card key={el.id} info={el} />
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
