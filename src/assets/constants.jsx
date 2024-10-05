import korzinkaImg from "/images/korzinka.jpg";
import mangoImg from "/images/Mango.png";
import texnomart from "/images/texnomart.jpg";
import makro from "/images/makro.jpg";
import gosty from "/images/gosty.jpg";
import shosh from "/images/shosh.jpg";
import petrovic from "/images/petrovic.jpg";

export const sideCards = [
  {
    id: 1,
    isActive: false,
    shop: "Korzinka.uz",
    title: "В четверг скидки на рыбу",
    type: "Супермаркеты",
    image: korzinkaImg,
    timeUp: "",
    isHot: true,
  },
  {
    id: 2,
    isActive: true,
    shop: "MANGO",
    title: "Акция 1+1",
    type: "Магазины брендовой одежды",
    image: mangoImg,
    timeUp: "",
    isHot: true,
  },
  {
    id: 3,
    isActive: false,
    shop: "TEXNOMART",
    title: "До — 60% на бытовую технику в ТЦ «Samarkand Darvoza»",
    type: "Магазины электроники и бытовой техники",
    image: texnomart,
    timeUp: "",
    isHot: true,
  },
  {
    id: 4,
    isActive: false,
    shop: "Makro",
    title: "При покупке CIF пачка губок Salixan БЕСПЛАТНО",
    type: "Супермаркеты",
    image: makro,
    timeUp: "",
    isHot: true,
  },
];

export const topCards = [
  {
    id: 1,
    isActive: false,
    shop: "Gosty",
    title: "Каждый вторник — 20% на все меню",
    type: "Рестораны",
    image: gosty,
    timeUp: "До 29 февраля",
    isHot: false,
  },
  {
    id: 1,
    isActive: false,
    shop: "Shosh",
    title: "Скидки на еду и напитки",
    type: "Кафе",
    image: shosh,
    timeUp: "71:59:59",
    isHot: true,
  },
  {
    id: 1,
    isActive: false,
    shop: "Petrovich",
    title: "Ланч по выгодной цене и 2% кешбэк по промокоду",
    type: "Рестораны",
    image: petrovic,
    timeUp: "До 29 февраля",
    isHot: false,
  },
];
