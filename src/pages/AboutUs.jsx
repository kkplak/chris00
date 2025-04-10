import React from "react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className='container'>
      {/* <div className="about-us-header">
        <h1>{t("GENERAL.aboutUs")}</h1>
        <p>{t("GENERAL.aboutUsContent")}</p>
      </div>
      <div className="wrapper">
        <div className="people-container">
          <div className="ioannis-container">
            <img
              src={`media/ioannis.jpg`}
              alt="Ioannis"
            />
            <h2>{t("GENERAL.ioannisSarafidis")}</h2>
          </div>
          <div className="lukasz-container">
            <img
              src={"/media/lukasz.png"}
              alt="Lukasz"
            />
            <h2>{t("GENERAL.lukaszBergel")}</h2>
          </div>
        </div>
        <p>
          {currentLanguage === "pl"
            ? t("GENERAL.aboutLukasz")
            : currentLanguage === "el"
            ? t("GENERAL.aboutIoannis")
            : t("GENERAL.aboutUsTogetherContent")}
        </p>
      </div> */}
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/0xxhJpFK6s0?si=-HOQxwCd61xiF__T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
    </div>
  );
};

export default AboutUs;
