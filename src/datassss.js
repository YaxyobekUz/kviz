// data.js
export const gender = [
  {
    id: 1,
    gender: "Я Мужчина",
    value: "Я Мужчина",
  },
  {
    id: 2,
    gender: "Я Женщина",
    value: "Я Женщина",
  },
];

export const countries = [
  {
    id: 1,
    name: "Узбекистан",
    value: "Uzbekistan",
    regions: [
      "Андижан",
      "Бухара",
      "Фарғона",
      "Жиззах",
      "Қашқадарё",
      "Наманган",
      "Навоий",
      "Самарқанд",
      "Сирдарё",
      "Сурхандарё",
      "Тошкент",
      "Хоразм",
    ],
  },
  {
    id: 2,
    name: "Казахстан",
    value: "Kazakhstan",
    regions: [
      "Алматинская область",
      "Актюбинская область",
      "Атырауская область",
      "Жамбылская область",
      "Мангистауская область",
      "Павлодарская область",
      "Карагандинская область",
      "Костанайская область",
      "Кызылординская область",
      "Туркестанская область",
      "Шымкент",
      "Астана",
      "Алматы",
    ],
  },
  {
    id: 3,
    name: "Кыргызстан",
    value: "Кыргызстан",
    regions: [
      "Баткенская область",
      "Бишкек",
      "Джалал-Абадская область",
      "Нарынская область",
      "Ошская область",
      "Таласская область",
      "Чуйская область",
      "Иссык-Кульская область",
    ],
  },
  {
    id: 5,
    name: "Россия",
    value: "Россия",
    regions: [
      "Москва",
      "Санкт-Петербург",
      "Ростовская область",
      "Воронежская область",
      "Калужская область",
      "Тульская область",
      "Нижегородская область",
      "Краснодарский край",
      "Свердловская область",
      "Челябинская область",
    ],
  },
];

export const ageGroups = [
  { id: 1, label: "До 18 лет", value: "under_18" },
  { id: 2, label: "18-24 лет", value: "18-24" },
  { id: 3, label: "25-34 лет", value: "25-34" },
  { id: 4, label: "35-44 лет", value: "35-44" },
  { id: 5, label: "45-54 лет", value: "45-54" },
  { id: 6, label: "55 лет и старше", value: "55_and_older" },
];

export const nationalities = [
  { id: 1, label: "Узбек", value: "uzbek" },
  { id: 2, label: "Русский", value: "russian" },
  { id: 3, label: "Казах", value: "kazakh" },
  // boshqa millatlar qo'shishingiz mumkin
];

export const sects = [
  { id: 1, label: "Ханафий", value: "hanafi" },
  { id: 2, label: "Шафиий", value: "shafi" },
  { id: 3, label: "Малик", value: "maliki" },
  { id: 4, label: "Ҳанбали", value: "hanbali" },
];

export const prays = [
  { id: 1, label: "Ҳа", value: "yes" },
  { id: 2, label: "Йўқ", value: "no" },
];

export const canReadQuran = [
  { id: 1, label: "Ҳа", value: "yes" },
  { id: 2, label: "Йўқ", value: "no" },
];

export const familyStatus = [
  { id: 1, label: "Бойдоқ", value: "single" },
  { id: 2, label: "Уйланган", value: "married" },
  { id: 3, label: "Ажрашган", value: "divorced" },
  { id: 4, label: "Еттим", value: "widowed" },
  // boshqa holatlar qo'shishingiz mumkin
];

export const childrenCount = [
  { id: 1, label: "1", value: "1" },
  { id: 2, label: "2", value: "2" },
  { id: 3, label: "3", value: "3" },
  { id: 4, label: "4 va undan ortiq", value: "4+" },
];

export const isReadyToMove = [
  { id: 1, label: "Ҳа", value: "yes" },
  { id: 2, label: "Йўқ", value: "no" },
];

export const futureWifeAge = [
  { id: 1, label: "18-25", value: "18-25" },
  { id: 2, label: "26-30", value: "26-30" },
  { id: 3, label: "31-35", value: "31-35" },
  { id: 4, label: "36 va yuqori", value: "36+" },
];

export const personalityTraits = [
  { id: 1, label: "Yaxshi", value: "good" },
  { id: 2, label: "Sabrli", value: "patient" },
  { id: 3, label: "Haqiqiy", value: "honest" },
  { id: 4, label: "Optimistik", value: "optimistic" },
  { id: 5, label: "Qayg‘uli", value: "concerned" },
  { id: 6, label: "Xushmuomal", value: "friendly" },
];

export const isConvicted = [
  { id: 1, label: "Ҳа", value: "yes" },
  { id: 2, label: "Йўқ", value: "no" },
];
