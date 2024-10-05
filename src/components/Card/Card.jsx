import "./style.css";

const Card = ({ info }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={info.image} alt="" />
      </div>
      {info.timeUp && (
        <div className={`time-up ${info.isHot && "hot"}`}>{info.timeUp}</div>
      )}
      <div className={`card-info ${info.isActive && "active-card"}`}>
        <p className="shop">{info.shop}</p>
        <h3 className="card-header">
          <span>{info.title}</span>
        </h3>
        <div className="discount">
          <p>Скидки</p>
          <div>Скидки</div>
          <h4>3%</h4>
        </div>
        <p className="type">{info.type}</p>
      </div>
    </div>
  );
};

export default Card;
