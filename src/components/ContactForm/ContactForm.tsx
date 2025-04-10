import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";
import "./ContactForm.css";

function ContactForm() {
  const { t, i18n } = useTranslation();

  const [state, handleSubmit] = useForm("xkgwndnd"); // Replace with your Formspree form ID
  if (state.succeeded) {
    return <p className="form-thank-you">{t("CONTACT.formThanks")}</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        id="name"
        type="text"
        name="name"
        required
        placeholder={t("CONTACT.formName")}
        className="form-input"
      />
      <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
        className="form-error"
      />

      {/* <select id="language" name="language" required className="form-select">
        <option value="">{t("CONTACT.formLanguage")}</option>
        <option value="english">{t("CONTACT.formEnglish")}</option>
        <option value="german">{t("CONTACT.formGerman")}</option>
        <option value="polish">{t("CONTACT.formPolish")}</option>
        <option value="greek">{t("CONTACT.formGreek")}</option>
      </select>
      <ValidationError
        prefix="Language"
        field="language"
        errors={state.errors}
        className="form-error"
      /> */}

      <input
        id="phone"
        type="tel"
        name="phone"
        required
        placeholder={t("CONTACT.formNumber")}
        className="form-input"
      />
      <ValidationError
        prefix="Phone"
        field="phone"
        errors={state.errors}
        className="form-error"
      />

      <input
        id="email"
        type="email"
        name="email"
        required
        placeholder={t("CONTACT.formEmail")}
        className="form-input"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className="form-error"
      />

      {/* <textarea
        id="message"
        name="message"
        placeholder="Message"
        className="form-textarea"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        className="form-error"
      /> */}

      <button type="submit" disabled={state.submitting} className="form-button">
        {t("CONTACT.formSubmit")}
      </button>
    </form>
  );
}

export default ContactForm;
