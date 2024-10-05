import { useState } from "react";
import "./style.css";

const Faq = () => {
  const faqData = [
    {
      id: 0,
      title: "Какие компании представлены на сайте?",
      text: `Чтобы быть в курсе новых скидок и акций на сайте, вы можете
            подписаться на наш телеграм-канал или следить за новостями.
            Мы регулярно отправляем информацию о новых предложениях и акциях
            нашим подписчикам, чтобы они всегда могли быть в курсе последних
            скидок и эксклюзивных предложений. Также можно регулярно посещать
            сайт и проверять разделы с акциями и скидками`,
      isOpen: false,
    },
    {
      id: 1,
      title: "Как я могу быть в курсе новых скидок и акций на сайте?",
      text: `Чтобы быть в курсе новых скидок и акций на сайте, вы можете
            подписаться на наш телеграм-канал или следить за новостями.
            Мы регулярно отправляем информацию о новых предложениях и акциях
            нашим подписчикам, чтобы они всегда могли быть в курсе последних
            скидок и эксклюзивных предложений. Также можно регулярно посещать
            сайт и проверять разделы с акциями и скидками`,
      isOpen: true,
    },
    {
      id: 2,
      title: "Могу ли я поделиться найденными скидками и акциями с друзьями?",
      text: `Чтобы быть в курсе новых скидок и акций на сайте, вы можете
            подписаться на наш телеграм-канал или следить за новостями.
            Мы регулярно отправляем информацию о новых предложениях и акциях
            нашим подписчикам, чтобы они всегда могли быть в курсе последних
            скидок и эксклюзивных предложений. Также можно регулярно посещать
            сайт и проверять разделы с акциями и скидками`,
      isOpen: false,
    },
  ];

  const [faq, setFaq] = useState(faqData);

  const handleOpenClose = (id) => {
    const newFaq = faq.map((item) => {
      if (item.id === id) {
        return { ...item, isOpen: !item.isOpen };
      } else {
        return item;
      }
    });

    setFaq(newFaq);
  };

  return (
    <div>
      <h1>FAQ</h1>
      <div className="accordion">
        {faq.map((el) => {
          return (
            <div key={el.id} className="accoordion-item">
              <div
                className="accoordion-header"
                onClick={() => handleOpenClose(el.id)}
              >
                <h3> {el.title}</h3>{" "}
                <img
                  width={32}
                  height={32}
                  src={!el.isOpen ? "/images/plus.svg" : "/images/cross.svg"}
                  alt="is open accordion"
                />
              </div>
              {el.isOpen && <div className="accoordion-text">{el.text}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
