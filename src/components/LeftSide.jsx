import Card from "./Card/Card";

const LeftSide = () => {
  return (
    <div className="side">
      <div>
        <h1>{"Скидки дня"}</h1>
        <p>
          <b>{"23 предложения"}</b>
        </p>
      </div>
      <div className="side-cards">
        <Card />
      </div>
    </div>
  );
};

export default LeftSide;
