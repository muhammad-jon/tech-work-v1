import "./style.css";

const Button = ({ red, children }) => {
  return (
    <button className={`button ${red && "red"}`}>
      <img src="/images/btn-plus.svg" alt="btn plus" />
      <span></span>
      {children}
    </button>
  );
};

export default Button;
