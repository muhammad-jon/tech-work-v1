import { useEffect, useState } from "react";
import { topCards } from "../../assets/constants";
import Card from "../Card/Card";
import "./style.css";

const TopDiscounts = () => {
  const [cards, setCards] = useState(topCards);
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    { id: 0, name: "Питание" },
    { id: 1, name: "Связь" },
    { id: 2, name: "Магазины" },
  ];

  const onHandleChangeCategory = (id) => {
    setActiveCategory(id);
    let newcards = topCards.filter((el) => el.category === id);
    setCards(newcards);
  };

  useEffect(() => {
    onHandleChangeCategory(activeCategory);
  }, []);

  return (
    <div className="top-discounts">
      <h1>Топовые скидки</h1>
      <div className="top-categories">
        {categories.map((el) => (
          <span
            onClick={() => onHandleChangeCategory(el.id)}
            className={el.id === activeCategory ? "active" : ""}
            key={el.name}
          >
            {el.name}
          </span>
        ))}
      </div>
      <div className="carousel">
        <img src="/images/Arrow-left.svg" alt="arrow" />
        <img src="/images/Arrow-right.svg" alt="arrow" />
        <div className="carousel-items">
          {cards.map((el) => {
            return (
              <div className="carousel-item" key={el.id}>
                <Card info={el} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default TopDiscounts;
