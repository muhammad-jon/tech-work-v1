import Faq from "./Faq/Faq";

const Main = () => {
  return (
    <div className="main">
      <div className="welcome">
        <h2>{"Добро пожаловать на сайт"}</h2>
        <p>
          <b>
            {
              "Ваш надёжный помощник в поиске лучших скидок и акций различных компаний!"
            }
          </b>
        </p>
        <p>
          {
            "Мы собрали для вас все самые выгодные предложения, чтобы вы могли сэкономить свои деньги и получить максимум удовольствия от покупок."
          }
        </p>
        <p className="cursor-pointer">{"Развернуть текст"}</p>
      </div>
      <div className="faq">
        <Faq />
      </div>
    </div>
  );
};

export default Main;
