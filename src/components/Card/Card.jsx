import "./style.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img src="./images/korzinka.jpg" alt="" />
      </div>
      <div className="card-info">
        <p className="shop">Korzinka.uz</p>
        <h3 className="card-header">{"В четверг скидки на рыбу"}</h3>
        <div className="discount">
          <p>Скидки</p>
          <div>Скидки</div>
          <h4>3%</h4>
        </div>
        <p className="type">Супермаркеты</p>
      </div>
    </div>
  );
};

export default Card;
