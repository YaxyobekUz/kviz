export const countriesName = ["Казахстан", "Киргизия", "Узбекистан", "Россия"];

// gender & country
export const page1 = {
  title: "Заполнение анкеты",
  items: {
    gender: {
      title: "Выберите Ваш пол",
      items: [
        {
          label: "Я Мужчина",
          value: "Мужчина",
        },
        {
          label: "Я Женщина",
          value: "Женщина",
        },
      ],
    },
    country: {
      title: "Выберите Вашу Страну",
      items: [
        {
          label: countriesName[0],
          value: countriesName[0],
        },
        {
          label: countriesName[1],
          value: countriesName[1],
        },
        {
          label: countriesName[2],
          value: countriesName[2],
        },
        {
          label: countriesName[3],
          value: countriesName[3],
        },
      ],
    },
  },
};

// country & region
export const page2 = {
  title: "Выберите Ваш город",
  name: "region",
  countries: {
    [countriesName[0]]: {
      name: countriesName[0],
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
    [countriesName[1]]: {
      name: countriesName[1],
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
    [countriesName[2]]: {
      name: countriesName[2],
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
    [countriesName[3]]: {
      name: countriesName[3],
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
  },
};
