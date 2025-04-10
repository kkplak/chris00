import React from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm/ContactForm";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="contact-page container">
        <h1>{t("GENERAL.contact")}</h1>
        <p>{t("GENERAL.contactUsP")}</p>
        <ContactForm />
      </div>
      <div className="container">
        <div className="contact-box-container">
          <div className="contact-box">
            <h2>{t("GENERAL.introduction")}</h2>
            <p>{t("GENERAL.introductionP")}</p>
          </div>
          <div className="contact-box">
            <h2>{t("GENERAL.meeting")}</h2>
            <p>{t("GENERAL.meetingP")}</p>
          </div>
          <div className="contact-box">
            <h2>{t("GENERAL.ongoingSupport")}</h2>
            <p>{t("GENERAL.ongoingSupportP")}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
