import { topCards } from "../../assets/constants";
import Card from "../Card/Card";
import "./style.css";

const TopDiscounts = () => {
  const categories = [
    { id: 0, name: "Питание", active: true },
    { id: 1, name: "Связь", active: false },
    { id: 2, name: "Магазины", active: false },
  ];

  return (
    <div className="top-discounts">
      <h1>Топовые скидки</h1>
      <div className="top-categories">
        {categories.map((el) => (
          <span className={el.active && "active"} key={el.id}>
            {el.name}
          </span>
        ))}
      </div>
      <div className="carousel">
        <img src="/images/Arrow-left.svg" alt="arrow" />
        <img src="/images/Arrow-right.svg" alt="arrow" />
        <div className="carousel-items">
          {topCards.map((el) => {
            return (
              <div className="carousel-item" key={el.id}>
                <Card info={el} />
              </div>
            );
          })}
        </div>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default TopDiscounts;
