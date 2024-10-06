import { sideCards } from "../assets/constants";
import Button from "./Button/Button";
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
      <br />
      <Button>{"Показать все"}</Button>
    </div>
  );
};

export default LeftSide;
