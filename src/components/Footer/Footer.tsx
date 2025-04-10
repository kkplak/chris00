import React from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Layout: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className='layout'>
      <Outlet />
      <footer id='contact'>
        <div className='contact'>
          <div className='contact-text'>
            <h3>{t("CONTACT.formFooter")}</h3>
            <div />
            <div className='contact-people'>
              <div className='contact-people-en'>
                <div>
                  <p className='people-name'>
                    <b>{t("GENERAL.ioannisSarafidis")}</b>
                  </p>
                  <a href={`tel:${t("GENERAL.ioannisPhone")}`}>
                    {t("GENERAL.ioannisPhone")}
                  </a>
                  <p>{t("GENERAL.ioannisMail")}</p>
                </div>
                <div>
                  <p className='people-name'>
                    <b>{t("GENERAL.lukaszBergel")}</b>
                  </p>
                  <a href={`tel:${t("GENERAL.lukaszPhone")}`}>
                    {t("GENERAL.lukaszPhone")}
                  </a>
                  <p>{t("GENERAL.lukaszMail")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
