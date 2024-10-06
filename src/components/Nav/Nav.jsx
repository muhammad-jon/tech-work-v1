import { navLinks } from "../../assets/constants";
import Button from "../Button/Button";
import "./style.css";

const Nav = () => {
  return (
    <div className="container">
      <div className="navbar">
        <h1>Logo</h1>
        <div className="nav-links">
          {navLinks.map((el) => (
            <span key={el.text}>
              {el.icon && <img src={el.icon} alt="" />}
              {el.text}
            </span>
          ))}
        </div>
        <div className="icons">
          <a href="#">
            <img src="/images/search.svg" alt="" />
          </a>
          <a href="#" className="social">
            <img src="/images/socials.svg" alt="" />
          </a>
          <a href="#" className="cabinet">
            <img src="/images/Cabinet.svg" alt="" />
          </a>

          <a href="#">{"Ру"}</a>
        </div>

        <span className="nav-btn">
          <Button red>{"Добавить скидку"}</Button>
        </span>
        <img className="nav-list" src="/images/indent.svg" alt="nav list" />
      </div>
    </div>
  );
};

export default Nav;
