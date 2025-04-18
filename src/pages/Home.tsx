// src/pages/Home.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import ButtonBox from "../components/ButtonBox/ButtonBox";
import LogoLine from "../components/LogoLine/LogoLine";

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const currentLanguage = i18n.language;

  const logos = [
    { src: "/media/helsana.png", name: "Helsana" },
    { src: "/media/visana.png", name: "Visana" },
    { src: "/media/css.png", name: "CSS" },
    { src: "/media/swica.png", name: "Swica" },
    { src: "/media/groupemutuel.png", name: "Groupe Mutuel" },
    { src: "/media/sanitas.svg", name: "Sanitas" },
    { src: "/media/concordia.png", name: "Concordia" },
    { src: "/media/l-life.png", name: "Liechtenstein Life" },
    { src: "/media/axa.png", name: "Axa" },
    { src: "/media/Allianz.png", name: "Allianz" },
  ];
  React.useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <div className='homepage'>
      <div
        className='container-home home'
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/media/bg7.png)`,
          backgroundSize: "cover",
        }}
      >
        <div className='text-container'>
          <p>{t("GENERAL.homeP2")}</p>
          <h1>{t("GENERAL.homeH1")}</h1>
          <p>{t("GENERAL.homeP")}</p>
          <p>{t("GENERAL.homeP2")}</p>
          <Link to={`/${lang}/contact`} className='button-link'>
            <button className='welcome-button'>
              <span className='lable'>{t("GENERAL.contactUs")}</span>
            </button>
          </Link>
        </div>
        {/* <div className='image-container'>
          <img src='/media/chris00png.png'></img>
        </div> */}
      </div>
      {/* <LogoLine logos={logos} /> */}
      <div className='button-box-container'>
        <div
          className={`button-box-row  ${
            currentLanguage === "de" ? "german-container" : ""
          }`}
        >
          <p>{t("GENERAL.homeP2")}</p>
          <h1>{t("GENERAL.homeH1")}</h1>
          <p>{t("GENERAL.homeP")}</p>
          <p>{t("GENERAL.homeP2")}</p> <p>{t("GENERAL.homeP2")}</p>
          <h1>{t("GENERAL.homeH1")}</h1>
          <p>{t("GENERAL.homeP")}</p>
          <p>{t("GENERAL.homeP2")}</p> <p>{t("GENERAL.homeP2")}</p>
          <h1>{t("GENERAL.homeH1")}</h1>
          <p>{t("GENERAL.homeP")}</p>
          <p>{t("GENERAL.homeP2")}</p>
        </div>
      </div>
      {/* <LogoLine logos={logos} mobileBreakpoint={900} marqueeSpeed={30} /> */}
    </div>
  );
};

export default Home;
