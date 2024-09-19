import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// axios
import axios from "axios";

// data
import { page1, page2 } from "./data";

// slider
import { Slider } from "@mui/material";

// components
import Option from "./components/Option";
import AnimationPage from "./components/AnimationPage";

const initialState = {
  age: 25,
  height: 170,
  weight: 70,
  sect: null,
  file: null,
  name: null,
  hijab: null,
  phone: null,
  soqol: null,
  quran: null,
  about: null,
  region: null,
  nation: null,
  prayer: null,
  gender: null,
  country: null,
  character: [],
  loader: false,
  age2: [18, 65],
  education: null,
  migration: null,
  telegram: null,
  instagram: null,
  maritalStatus: null,
  extraCharacter: null,
  childrenSCount: null,
  telephoneNumber: "+",
  aboutTheFutureWife: null,
};

const Page = ({ page = 1, updatePage, updateMaxPage = () => 1, maxPage }) => {
  // --- States ---
  const navigate = useNavigate();
  const [formState, setFormState] = useState(initialState);
  const {
    age,
    age2,
    sect,
    file,
    soqol,
    hijab,
    about,
    quran,
    name,
    phone,
    gender,
    region,
    nation,
    prayer,
    height,
    weight,
    loader,
    country,
    telegram,
    instagram,
    migration,
    character,
    education,
    maritalStatus,
    extraCharacter,
    childrenSCount,
    telephoneNumber,
    aboutTheFutureWife,
  } = formState;

  //  --- Helpers ---
  const isMale = gender === "Мужчина";
  const currentSection = (sectionNumber) => page === sectionNumber;
  const checkInputFieldOption = (state, value) => {
    return state?.length > 0 && !value.includes(state);
  };
  const handleUpdateState = useCallback((key, value) => {
    setFormState((prevState) => ({ ...prevState, [key]: value }));
  }, []);
  const handleUpdateCharacter = useCallback((value) => {
    setFormState((prevState) => ({
      ...prevState,
      character: prevState.character.includes(value)
        ? prevState.character.filter((char) => char !== value)
        : [...prevState.character, value],
    }));
  }, []);

  const updateCurrentPage = (pageNum = 1) => {
    setTimeout(() => {
      updatePage(pageNum);
    }, 300);
  }

  // --- Update max pages ---
  useEffect(() => {
    let maxPage = 0;

    if (gender && country) {
      if (
        file &&
        sect &&
        about &&
        quran &&
        region &&
        nation &&
        prayer &&
        country &&
        education &&
        migration &&
        maritalStatus &&
        childrenSCount &&
        aboutTheFutureWife &&
        telephoneNumber?.length > 1 &&
        (character?.length > 0 || extraCharacter) &&
        ((isMale && soqol) || (!isMale && hijab))
      ) {
        maxPage = 10;
      } else if (
        sect &&
        quran &&
        region &&
        nation &&
        prayer &&
        country &&
        education &&
        migration &&
        maritalStatus &&
        childrenSCount &&
        telephoneNumber?.length > 1 &&
        (character?.length > 0 || extraCharacter) &&
        ((isMale && soqol) || (!isMale && hijab))
      ) {
        maxPage = 9;
      } else if (
        sect &&
        quran &&
        region &&
        nation &&
        prayer &&
        country &&
        education &&
        migration &&
        maritalStatus &&
        childrenSCount &&
        (character?.length > 0 || extraCharacter) &&
        ((isMale && soqol) || (!isMale && hijab))
      ) {
        maxPage = 8;
      } else if (
        sect &&
        quran &&
        region &&
        nation &&
        prayer &&
        country &&
        migration &&
        maritalStatus &&
        childrenSCount &&
        (character?.length > 0 || extraCharacter) &&
        ((isMale && soqol) || (!isMale && hijab))
      ) {
        maxPage = 7;
      } else if (
        sect &&
        quran &&
        region &&
        nation &&
        prayer &&
        country &&
        migration &&
        maritalStatus &&
        childrenSCount &&
        ((isMale && soqol) || (!isMale && hijab))
      ) {
        maxPage = 6;
      } else if (
        sect &&
        quran &&
        region &&
        nation &&
        prayer &&
        country &&
        maritalStatus &&
        ((isMale && soqol) || (!isMale && hijab))
      ) {
        maxPage = 5;
      } else if (((isMale && soqol) || (!isMale && hijab)) && nation && prayer) {
        maxPage = 4;
      } else if (region) {
        maxPage = 3;
      } else {
        maxPage = 1;
      }
    } else {
      updatePage(0);
    }

    updateMaxPage(maxPage);
  }, [formState, updateMaxPage]);


  // auto scroll
  useEffect(() => {
    const current = (number) => page === number;
    if (current(0) && gender && country) {
      updateCurrentPage(1)
    } else if (current(1) && region) {
      updateCurrentPage(2)
    } else if (current(3) && nation && prayer && (soqol || hijab)) {
      updateCurrentPage(4)
    } else if (current(4) && quran && sect && maritalStatus) {
      updateCurrentPage(5)
    } else if (current(5) && childrenSCount && migration) {
      updateCurrentPage(6)
    }
  }, [formState])


  // --- Swiper ---
  useEffect(() => {
    const swiper = document.querySelector(".mySwiper")?.swiper;
    if (swiper) {
      swiper.pagination.el = document.querySelector(".external-pagination");

      // update swiper
      swiper.update();
    }
  }, []);

  const submit = (e) => {
    e.preventDefault();

    if (
      true ||
      (sect &&
        name &&
        quran &&
        phone &&
        region &&
        nation &&
        prayer &&
        !loader &&
        country &&
        education &&
        migration &&
        maritalStatus &&
        childrenSCount &&
        telephoneNumber?.length > 1 &&
        (character?.length > 0 || extraCharacter) &&
        ((isMale && soqol) || (!isMale && hijab)))
    ) {
      // add loader
      handleUpdateState("loader", true);

      // helpers
      const token = "7096252874:AAFwuN5TLWTOvyGXdE6gKQ_KRkBKDnnCOjA";
      const baseUrl = "https://api.telegram.org/bot" + token + "/";
      const url = `${baseUrl}sendMessage`;
      const chatId = "-1002297889113";

      // message
      const message = `
*Пол:* ${gender}
*Национальность:* ${nation}
*Читаете ли Вы намаз?* ${prayer}
*${soqol ? "Носите ли вы бороду?" : "Носите ли вы хиджаб?"}:* ${soqol ? soqol : hijab}
*Умеете ли вы читать К'уран?* ${quran}
*Мазхаб:* ${sect}

*Имя:* ${name}
*Возраст:* ${age}
*Страна:* ${country}
*Город:* ${region}
*Семейное положение:* ${maritalStatus}
*Количество детей:* ${childrenSCount}
*Готовы ли вы к переезду?* ${migration}
*Возраст будущего мужа/жены:* от ${age2[0]} до ${age2[1]}
*Характер:*${character?.length > 0 && character.map((char) => " " + char)} ${extraCharacter ? extraCharacter : ""}

*Рост:* ${height} sm
*Вес:* ${weight} kg
*Образование:* ${education}
*О себе:* ${about}
*О будущей ${isMale ? "муже" : "жене"}:* ${aboutTheFutureWife}

*Номер в WhatsApp:* ${telephoneNumber}
*Ссылка на Instagram:* ${instagram ? instagram : "Нет"}
*Ссылка на Telegram:* ${telegram ? telegram : "Нет"}
`;

      // form data
      const formData = {
        text: message,
        chat_id: chatId,
        parse_mode: "Markdown",
        disable_web_page_preview: true,
      };

      // send a request
      axios
        .post(url, formData)
        .then(() => navigate("/success"))
        .catch(() => alert("Произошла неизвестная ошибка!"))
        .finally(() => handleUpdateState("loader", false));
    }
  };

  return (
    <>
      {/* section 0 */}
      {currentSection(0) && (
        <AnimationPage>
          {/* section title */}
          <h2>Заполните анкету</h2>

          {/* section content */}
          <div className="space-y-8">
            {/* --- Gender --- */}
            <h3>{page1.items.gender.title}</h3>

            {/* section item content */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-5">
              {page1.items.gender.items.map((item, index) => {
                return (
                  <Option
                    key={index}
                    name="gender"
                    text={item.label}
                    value={item.value}
                    isActive={item.value === gender}
                    onChange={(value) => {
                      handleUpdateState("gender", value);
                      handleUpdateState("childrenSCount", null);
                    }}
                  />
                );
              })}
            </div>

            {/* --- Country --- */}
            <h3>{page1.items.country.title}</h3>

            {/* section item content */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-5">
              {page1.items.country.items.map((item, index) => {
                const handleUpdate = () => {
                  if (country !== item.value) {
                    handleUpdateState("region", null);
                    handleUpdateState("country", item.value);
                  }
                };

                // content
                return (
                  <Option
                    key={index}
                    name="gender"
                    text={item.label}
                    value={item.value}
                    onChange={handleUpdate}
                    isActive={item.value === country}
                  />
                );
              })}
            </div>
          </div>
        </AnimationPage>
      )}

      {/* section 1 */}
      {currentSection(1) && (
        <AnimationPage>
          {/* section title */}
          <h2>{page2.title}</h2>

          {/* section content */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-5">
            {page2.countries[country]
              ? page2.countries[country].regions.map((regionData, index) => (
                <Option
                  key={index}
                  name="region"
                  text={regionData}
                  value={regionData}
                  isActive={regionData === region}
                  onChange={(value) =>
                    handleUpdateState("region", regionData)
                  }
                />
              ))
              : "Something went wrong :("}
          </div>
        </AnimationPage>
      )}

      {/* section 2 */}
      {currentSection(2) && (
        <AnimationPage>
          {/* section title */}
          <h2>Сколько Вам лет?</h2>

          <input
            disabled
            type="text"
            value={age}
            maxLength={2}
            className="bg-white !text-lg font-normal border h-12 rounded-lg px-5 mb-5 outline-none border-secondary/30 focus:border-primary"
          />

          <div className="space-y-3">
            <Slider
              min={18}
              max={65}
              value={age}
              defaultValue={18}
              onChange={(e) => handleUpdateState("age", e.target.value)}
            />

            <div className="flex items-center justify-between px-1">
              <p className="text-sm opacity-50">18</p>
              <p className="text-sm opacity-50">65</p>
            </div>
          </div>
        </AnimationPage>
      )}

      {/* section 3 */}
      {currentSection(3) && (
        <AnimationPage>
          {/* section title */}
          <h2>*</h2>

          {/* section content */}
          <div className="space-y-8">
            {/* --- Nation --- */}
            <h3>Национальность</h3>

            {/* section item content */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-5">
              <Option
                text="Казах"
                value="Казах"
                isActive={nation === "Казах"}
                onChange={(value) => handleUpdateState("nation", value)}
              />

              <Option
                text="Киргиз"
                value="Киргиз"
                isActive={nation === "Киргиз"}
                onChange={(value) => handleUpdateState("nation", value)}
              />

              <Option
                text="Узбек"
                value="Узбек"
                isActive={nation === "Узбек"}
                onChange={(value) => handleUpdateState("nation", value)}
              />

              <Option
                text="Русский"
                value="Русский"
                isActive={nation === "Русский"}
                onChange={(value) => handleUpdateState("nation", value)}
              />

              {/* other */}
              <Option
                inputField
                value={nation}
                text="Другое..."
                onChange={(value) => handleUpdateState("nation", value)}
                isActive={checkInputFieldOption(nation, [
                  "Казах",
                  "Киргиз",
                  "Узбек",
                  "Русский",
                ])}
              />
            </div>

            {/* --- Prayer --- */}
            <h3>Читаете ли Вы намаз?</h3>

            {/* section item content */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-5">
              <Option
                text="Да"
                value="Да"
                isActive={prayer === "Да"}
                onChange={(value) => handleUpdateState("prayer", value)}
              />
              <Option
                text="Нет"
                value="Нет"
                isActive={prayer === "Нет"}
                onChange={(value) => handleUpdateState("prayer", value)}
              />

              {/* other */}
              <Option
                inputField
                value={prayer}
                text="Другое..."
                onChange={(value) => handleUpdateState("prayer", value)}
                isActive={checkInputFieldOption(prayer, ["Да", "Нет",])}
              />
            </div>

            {/* --- Soqol or Hijab --- */}
            <h3>{isMale ? "Носите ли вы бороду?" : "Носите ли вы хиджаб?"}</h3>

            {/* section item content */}
            {isMale ? (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-5">
                <Option
                  text="Да"
                  value="Да"
                  isActive={soqol === "Да"}
                  onChange={(value) => handleUpdateState("soqol", value)}
                />

                <Option
                  text="Нет"
                  value="Нет"
                  isActive={soqol === "Нет"}
                  onChange={(value) => handleUpdateState("soqol", value)}
                />

                {/* other */}
                <Option
                  inputField
                  value={soqol}
                  text="Другое..."
                  onChange={(value) => handleUpdateState("soqol", value)}
                  isActive={checkInputFieldOption(soqol, ["Да", "Нет",])}
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-5">
                <Option
                  text="Да"
                  value="Да"
                  isActive={hijab === "Да"}
                  onChange={(value) => handleUpdateState("hijab", value)}
                />

                <Option
                  text="Нет"
                  value="Нет"
                  isActive={hijab === "Нет"}
                  onChange={(value) => handleUpdateState("hijab", value)}
                />

                {/* other */}
                <Option
                  inputField
                  value={hijab}
                  text="Другое..."
                  onChange={(value) => handleUpdateState("hijab", value)}
                  isActive={checkInputFieldOption(hijab, ["Да", "Нет",])}
                />
              </div>
            )}
          </div>
        </AnimationPage>
      )}

      {/* section 4 */}
      {currentSection(4) && (
        <AnimationPage>
          {/* section title */}
          <h2>**</h2>

          {/* section content */}
          <div className="space-y-8">
            {/* --- Quran --- */}
            <h3>Умеете ли вы читать К'уран?</h3>

            {/* section item content */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-5">
              <Option
                text="Да"
                value="Да"
                isActive={quran === "Да"}
                onChange={(value) => handleUpdateState("quran", value)}
              />

              <Option
                text="Нет"
                value="Нет"
                isActive={quran === "Нет"}
                onChange={(value) => handleUpdateState("quran", value)}
              />

              {/* other */}
              <Option
                inputField
                value={quran}
                text="Другое..."
                isActive={checkInputFieldOption(quran, ["Да", "Нет"])}
                onChange={(value) => handleUpdateState("quran", value)}
              />
            </div>

            {/* --- Sect --- */}
            <h3>Ваш Мазхаб?</h3>

            {/* section item content */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-5">
              <Option
                text="Абу Ханифа"
                value="Абу Ханифа"
                isActive={sect === "Абу Ханифа"}
                onChange={(value) => handleUpdateState("sect", value)}
              />

              {/* other */}
              <Option
                inputField
                value={sect}
                text="Другое..."
                onChange={(value) => handleUpdateState("sect", value)}
                isActive={checkInputFieldOption(sect, ["Абу Ханифа"])}
              />
            </div>

            {/* --- Marital status --- */}
            <h3>Семейное положение</h3>

            {/* section item content */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-5">
              <Option
                text={isMale ? "Не женат (Не был женат)" : "Не замужем"}
                value={isMale ? "Не женат (Не был женат)" : "Не замужем"}
                onChange={(value) => {
                  handleUpdateState("maritalStatus", value);
                }}
                isActive={
                  maritalStatus ===
                  (isMale ? "Не женат (Не был женат)" : "Не замужем")
                }
              />
              <Option
                text={isMale ? "Холост" : "Не была замужем"}
                value={isMale ? "Холост" : "Не была замужем"}
                onChange={(value) => {
                  handleUpdateState("maritalStatus", value);
                }}
                isActive={
                  maritalStatus === (isMale ? "Холост" : "Не была замужем")
                }
              />
              <Option
                text={isMale ? "Разведен" : "Разведена"}
                value={isMale ? "Разведен" : "Разведена"}
                onChange={(value) => {
                  handleUpdateState("maritalStatus", value);
                }}
                isActive={maritalStatus === (isMale ? "Разведен" : "Разведена")}
              />
              <Option
                text={isMale ? "Вдовец" : "Вдова"}
                value={isMale ? "Вдовец" : "Вдова"}
                isActive={maritalStatus === (isMale ? "Вдовец" : "Вдова")}
                onChange={(value) => {
                  handleUpdateState("maritalStatus", value);
                }}
              />
              <Option
                text={isMale ? "Ищу 2-ую жену" : "Ищу мужу 2-ую жену"}
                value={isMale ? "Ищу 2-ую жену" : "Ищу мужу 2-ую жену"}
                onChange={(value) => {
                  handleUpdateState("maritalStatus", value);
                }}
                isActive={
                  maritalStatus ===
                  (isMale ? "Ищу 2-ую жену" : "Ищу мужу 2-ую жену")
                }
              />
              <Option
                text={isMale ? "Ищу 3-ую жену" : "Ищу мужу 3-ую жену"}
                value={isMale ? "Ищу 3-ую жену" : "Ищу мужу 3-ую жену"}
                onChange={(value) => {
                  handleUpdateState("maritalStatus", value);
                }}
                isActive={
                  maritalStatus ===
                  (isMale ? "Ищу 3-ую жену" : "Ищу мужу 3-ую жену")
                }
              />
              <Option
                text={isMale ? "Ищу 4-ую жену" : "Ищу мужу 4-ую жену"}
                value={isMale ? "Ищу 4-ую жену" : "Ищу мужу 4-ую жену"}
                onChange={(value) => {
                  handleUpdateState("maritalStatus", value);
                }}
                isActive={
                  maritalStatus ===
                  (isMale ? "Ищу 4-ую жену" : "Ищу мужу 4-ую жену")
                }
              />

              {/* other */}
              <Option
                inputField
                text="Другое..."
                value={maritalStatus}
                onChange={(value) => {
                  handleUpdateState("maritalStatus", value);
                }}
                isActive={checkInputFieldOption(maritalStatus, [
                  "Вдова",
                  "Холост",
                  "Вдовец",
                  "Разведен",
                  "Разведена",
                  "Не замужем",
                  "Ищу 2-ую жену",
                  "Ищу 3-ую жену",
                  "Ищу 4-ую жену",
                  "Не была замужем",
                  "Ищу мужу 2-ую жену",
                  "Ищу мужу 3-ую жену",
                  "Ищу мужу 4-ую жену",
                  "Не женат (Не был женат)",
                ])}
              />
            </div>
          </div>
        </AnimationPage>
      )}

      {/* section 5 */}
      {currentSection(5) && (
        <AnimationPage>
          {/* section title */}
          <h2>***</h2>

          {/* section content */}
          <div className="space-y-8">
            {/* --- Children's count --- */}
            <h3>Количество детей</h3>

            {/* section item content */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-5">
              <Option
                text="Детей нет"
                value="Детей нет"
                isActive={childrenSCount === "Детей нет"}
                onChange={(value) => handleUpdateState("childrenSCount", value)}
              />
              <Option
                text="Живут отдельно"
                value="Живут отдельно"
                isActive={childrenSCount === "Живут отдельно"}
                onChange={(value) => handleUpdateState("childrenSCount", value)}
              />
              <Option
                text={isMale ? "Живут с Мамой" : "Живут с отцом"}
                value={isMale ? "Живут с Мамой" : "Живут с отцом"}
                onChange={(value) => handleUpdateState("childrenSCount", value)}
                isActive={
                  childrenSCount ===
                  (isMale ? "Живут с Мамой" : "Живут с отцом")
                }
              />
              <Option
                text="Не живут со мной"
                value="Не живут со мной"
                isActive={childrenSCount === "Не живут со мной"}
                onChange={(value) => handleUpdateState("childrenSCount", value)}
              />
              <Option
                text="1"
                value="1"
                isActive={childrenSCount === "1"}
                onChange={(value) => handleUpdateState("childrenSCount", value)}
              />
              <Option
                text="2"
                value="2"
                isActive={childrenSCount === "2"}
                onChange={(value) => handleUpdateState("childrenSCount", value)}
              />
              <Option
                text="3"
                value="3"
                isActive={childrenSCount === "3"}
                onChange={(value) => handleUpdateState("childrenSCount", value)}
              />

              {/* other */}
              <Option
                inputField
                text="Другое..."
                value={childrenSCount}
                onChange={(value) => handleUpdateState("childrenSCount", value)}
                isActive={checkInputFieldOption(childrenSCount, [
                  "1",
                  "2",
                  "3",
                  "Детей нет",
                  "Живут с Мамой",
                  "Живут с отцом",
                  "Живут отдельно",
                  "Не живут со мной",
                ])}
              />
            </div>

            {/* --- Migration --- */}
            <h3>Готовы ли Вы к переезду?</h3>

            {/* section item content */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-5">
              <Option
                text="Да"
                value="Да"
                isActive={migration === "Да"}
                onChange={(value) => handleUpdateState("migration", value)}
              />

              <Option
                text="Нет"
                value="Нет"
                isActive={migration === "Нет"}
                onChange={(value) => handleUpdateState("migration", value)}
              />

              {/* other */}
              <Option
                inputField
                text="Другое..."
                value={migration}
                isActive={checkInputFieldOption(migration, ["Да", "Нет"])}
                onChange={(value) => handleUpdateState("migration", value)}
              />
            </div>
          </div>
        </AnimationPage>
      )}

      {/* section 6 */}
      {currentSection(6) && (
        <AnimationPage>
          {/* section title */}
          <h2>****</h2>

          {/* section content */}
          <div className="space-y-8">
            {/* --- Slider (age 2) --- */}
            <h3>
              {isMale ? "Возраст Будущей жены?" : "Возраст Будущего мужа?"}
            </h3>

            <div className="space-y-3">
              {/* result inputs wrapper */}
              <div className="flex flex-col gap-3.5 sm:items-center sm:flex-row">
                <input
                  disabled
                  type="text"
                  maxLength={2}
                  value={age2[0]}
                  className="w-44 bg-white !text-lg font-normal border h-12 rounded-lg px-5 outline-none border-secondary/30 focus:border-primary"
                />

                <span className="inline-block w-3.5 h-0.5 bg-secondary/20 rounded-full"></span>

                <input
                  disabled
                  type="text"
                  value={age2[1]}
                  maxLength={2}
                  className="w-44 bg-white !text-lg font-normal border h-12 rounded-lg px-5 outline-none border-secondary/30 focus:border-primary"
                />
              </div>

              {/* slider wrapper */}
              <div className="space-y-3">
                <Slider
                  min={18}
                  max={65}
                  value={age2}
                  className="sliderr"
                  onChange={(e) => handleUpdateState("age2", e.target.value)}
                />

                <div className="flex items-center justify-between px-1">
                  <p className="text-sm opacity-50">18</p>
                  <p className="text-sm opacity-50">65</p>
                </div>
              </div>
            </div>

            {/* --- Character --- */}
            <h3>Ваш Характер</h3>

            {/* section item content */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-5">
              <Option
                type="checkbox"
                onChange={handleUpdateCharacter}
                text={isMale ? "Хороший" : "Хорошая"}
                value={isMale ? "Хороший" : "Хорошая"}
                isActive={character.includes(isMale ? "Хороший" : "Хорошая")}
              />
              <Option
                type="checkbox"
                onChange={handleUpdateCharacter}
                text={isMale ? "Добрый" : "Добрая"}
                value={isMale ? "Добрый" : "Добрая"}
                isActive={character.includes(isMale ? "Добрый" : "Добрая")}
              />
              <Option
                type="checkbox"
                onChange={handleUpdateCharacter}
                text={isMale ? "Заботливый" : "Заботливая"}
                value={isMale ? "Заботливый" : "Заботливая"}
                isActive={character.includes(
                  isMale ? "Заботливый" : "Заботливая"
                )}
              />
              <Option
                type="checkbox"
                onChange={handleUpdateCharacter}
                text={isMale ? "Скромный" : "Скромная"}
                value={isMale ? "Скромный" : "Скромная"}
                isActive={character.includes(isMale ? "Скромный" : "Скромная")}
              />

              {/* other */}
              <Option
                inputField
                type="checkbox"
                text="Другое..."
                value={character}
                isActive={extraCharacter?.length >= 1}
                onChange={(value) => handleUpdateState("extraCharacter", value)}
              />
            </div>
          </div>
        </AnimationPage>
      )}

      {/* section 7 */}
      {currentSection(7) && (
        <AnimationPage>
          {/* section title */}
          <h2>*****</h2>

          {/* section content */}
          <div className="space-y-8">
            {/* --- Height --- */}
            <h3>Ваш Рост (в сантиметрах)</h3>

            <div className="space-y-3">
              <input
                disabled
                type="text"
                maxLength={3}
                value={height}
                className="w-44 bg-white !text-lg font-normal border h-12 rounded-lg px-5 outline-none border-secondary/30 focus:border-primary"
              />

              {/* slider wrapper */}
              <div className="space-y-3">
                <Slider
                  min={150}
                  max={220}
                  value={height}
                  onChange={(e) => handleUpdateState("height", e.target.value)}
                />

                <div className="flex items-center justify-between px-1">
                  <p className="text-sm opacity-50">150</p>
                  <p className="text-sm opacity-50">120</p>
                </div>
              </div>
            </div>

            {/* --- Weight --- */}
            <h3>Ваш Вес (килограммах)</h3>

            <div className="space-y-3">
              <input
                disabled
                type="text"
                maxLength={3}
                value={weight}
                className="w-44 bg-white !text-lg font-normal border h-12 rounded-lg px-5 outline-none border-secondary/30 focus:border-primary"
              />

              {/* slider wrapper */}
              <div className="space-y-3">
                <Slider
                  min={45}
                  max={120}
                  value={weight}
                  onChange={(e) => handleUpdateState("weight", e.target.value)}
                />

                <div className="flex items-center justify-between px-1">
                  <p className="text-sm opacity-50">45</p>
                  <p className="text-sm opacity-50">120</p>
                </div>
              </div>
            </div>

            {/* --- Education --- */}
            <h3>Образование</h3>

            {/* section item content */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-5">
              <Option
                text="Высшее"
                value="Высшее"
                isActive={education === "Высшее"}
                onChange={(value) => handleUpdateState("education", value)}
              />
              <Option
                text="Техническое"
                value="Техническое"
                isActive={education === "Техническое"}
                onChange={(value) => handleUpdateState("education", value)}
              />
              <Option
                text="Средне техническое"
                value="Средне техническое"
                isActive={education === "Средне техническое"}
                onChange={(value) => handleUpdateState("education", value)}
              />
              <Option
                text="9 классов"
                value="9 классов"
                isActive={education === "9 классов"}
                onChange={(value) => handleUpdateState("education", value)}
              />

              <Option
                text="11 классов"
                value="11 классов"
                isActive={education === "11 классов"}
                onChange={(value) => handleUpdateState("education", value)}
              />

              <Option
                text="Университет"
                value="Университет"
                isActive={education === "Университет"}
                onChange={(value) => handleUpdateState("education", value)}
              />

              <Option
                text="Медресе"
                value="Медресе"
                isActive={education === "Медресе"}
                onChange={(value) => handleUpdateState("education", value)}
              />

              {/* other */}
              <Option
                inputField
                text="Другое..."
                value={education}
                onChange={(value) => handleUpdateState("education", value)}
                isActive={checkInputFieldOption(education, [
                  "Высшее",
                  "Техническое",
                  "Средне техническое",
                  "9 классов",
                  "11 классов",
                  "Университет",
                  "Медресе",
                ])}
              />
            </div>
          </div>
        </AnimationPage>
      )}

      {/* section 8 */}
      {currentSection(8) && (
        <AnimationPage>
          {/* section content */}
          <div className="space-y-8">
            {/* --- Height --- */}

            <div className="space-y-3">
              <h3>Номер в WhatsApp</h3>

              <input
                type="text"
                maxLength={144}
                value={telephoneNumber}
                className="w-full h-14 bg-gray-50 !text-lg border rounded-lg px-5 outline-none border-secondary/30 focus:border-primary"
                onChange={(e) =>
                  handleUpdateState("telephoneNumber", e.target.value)
                }
              />
            </div>

            <div className="space-y-3">
              <h3>Ссылка на Instagram:</h3>

              <input
                type="text"
                maxLength={144}
                value={instagram}
                onChange={(e) => handleUpdateState("instagram", e.target.value)}
                className="w-full h-14 bg-gray-50 !text-lg border rounded-lg px-5 outline-none border-secondary/30 focus:border-primary"
              />
            </div>

            <div className="space-y-3">
              <h3>Ссылка на Telegram:</h3>

              <input
                type="text"
                maxLength={144}
                value={telegram}
                onChange={(e) => handleUpdateState("telegram", e.target.value)}
                className="w-full h-14 bg-gray-50 !text-lg border rounded-lg px-5 outline-none border-secondary/30 focus:border-primary"
              />
            </div>
          </div>
        </AnimationPage>
      )}

      {/* section 9 */}
      {currentSection(9) && (
        <AnimationPage>
          {/* section content */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h3>О себе:</h3>

              <textarea
                type="text"
                value={about}
                maxLength={2048}
                onChange={(e) => handleUpdateState("about", e.target.value)}
                className="w-full min-h-64 bg-gray-50 !text-lg border rounded-lg p-3.5 py-3 outline-none border-secondary/30 focus:border-primary"
              />
            </div>

            <div className="space-y-3">
              <h3>О будущей супруге:</h3>

              <textarea
                type="text"
                maxLength={2048}
                value={aboutTheFutureWife}
                className="w-full min-h-64 bg-gray-50 !text-lg border rounded-lg p-3.5 py-3 outline-none border-secondary/30 focus:border-primary"
                onChange={(e) =>
                  handleUpdateState("aboutTheFutureWife", e.target.value)
                }
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-center">Загрузите ваше фото (это не будет показываться другим пользователям и нужно только для проверки что вы реальный человек)</h3>

              <label className="flex flex-col items-center justify-center gap-3.5 w-full py-10 bg-transparent border border-secondary/35 border-dashed rounded-lg transition-colors duration-200 hover:border-primary hover:bg-primary/15 cursor-pointer">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5535 2.49392C12.4114 2.33852 12.2106 2.25 12 2.25C11.7894 2.25 11.5886 2.33852 11.4465 2.49392L7.44648 6.86892C7.16698 7.17462 7.18822 7.64902 7.49392 7.92852C7.79963 8.20802 8.27402 8.18678 8.55352 7.88108L11.25 4.9318V16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16V4.9318L15.4465 7.88108C15.726 8.18678 16.2004 8.20802 16.5061 7.92852C16.8118 7.64902 16.833 7.17462 16.5535 6.86892L12.5535 2.49392Z" fill="#d34085" />
                  <path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z" fill="#d34085" />
                </svg>

                <div className="font-semibold">Нажмите, чтобы загрузить файл</div>
                <div className="text-sm">Или перетяните его из папки в это поле</div>

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleUpdateState("file", e.target.files[0])}
                />
              </label>

              {
                file &&
                <button
                  onClick={() => handleUpdateState("file", null)}
                  className="px-3.5 py-1 border border-secondary/25 rounded-lg text-sm transition-colors duration-200 hover:bg-primary/15"
                >
                  {file.name}
                </button>
              }
            </div>


          </div>
        </AnimationPage>
      )}

      {/* section 10 */}
      {currentSection(10) && (
        <AnimationPage>
          {/* section content */}
          <div className="flex items-center justify-center">
            <form onSubmit={submit} className="max-w-xl w-full sm:p-10">
              <label className="flex flex-col gap-3.5">
                <span className="font-medium">Введите имя</span>

                <input
                  required
                  type="text"
                  value={name}
                  maxLength={144}
                  placeholder="Имя"
                  onChange={(e) => handleUpdateState("name", e.target.value)}
                  className="w-full h-12 rounded-md px-4 mb-5 font-medium outline-none border border-secondary/30 focus:border-primary"
                />
              </label>

              <label className="flex flex-col gap-3.5">
                <span className="font-medium">Введите телефон</span>

                <input
                  required
                  type="tel"
                  value={phone}
                  maxLength={64}
                  placeholder="Введите телефон"
                  onChange={(e) => handleUpdateState("phone", e.target.value)}
                  className="w-full h-12 rounded-md px-4 mb-5 font-medium outline-none border border-secondary/30 focus:border-primary"
                />
              </label>

              {/* --- Submit --- */}
              <button
                disabled={loader || !name || !phone}
                className="flex items-center justify-center gap-2.5 w-full h-12 bg-primary px-8 text-white rounded-lg transition-colors duration-200 disabled:opacity-70 capitalize"
              >
                {loader ? "отправить..." : "отправить"}
              </button>
            </form>
          </div>
        </AnimationPage>
      )}
    </>
  );
};

export default Page;
