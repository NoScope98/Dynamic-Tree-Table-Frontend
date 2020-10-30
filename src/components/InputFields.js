import React from "react";
import { useTranslation } from "react-i18next";

const InputFields = ({
  handleChange,
  inputNameValue,
  inputIPValue,
  inputPortValue,
  error,
  isValid,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="mb-2">
        <label htmlFor="inputName" className="form-label">
          {t("Name")}
        </label>
        <input
          className={`form-control ${
            error || !isValid.isNameValid ? "is-invalid" : ""
          }`}
          id="inputName"
          type="text"
          name="name"
          value={inputNameValue}
          placeholder={t("EnterName")}
          onChange={handleChange}
        ></input>
        <div className="invalid-feedback">
          {error
            ? error === "UniqueConstraintError"
              ? t("NameExists")
              : null
            : t("IncorrectNameFormat")}
        </div>
      </div>
      <div className="mb-2">
        <label htmlFor="inputIP" className="form-label">
          {t("IPAddress")}
        </label>
        <input
          className={`form-control ${!isValid.isIPValid ? "is-invalid" : ""}`}
          id="inputIP"
          type="text"
          name="IP"
          value={inputIPValue}
          placeholder="0.0.0.0"
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        <div className="invalid-feedback">{t("IncorrectIPFormat")}</div>
      </div>
      <div className="">
        <label htmlFor="inputPort" className="form-label">
          {t("Port")}
        </label>
        <input
          className={`form-control ${!isValid.isPortValid ? "is-invalid" : ""}`}
          id="inputPort"
          type="text"
          name="port"
          value={inputPortValue}
          placeholder="0000"
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        <div className="invalid-feedback">{t("IncorrectPortNumberFormat")}</div>
      </div>
    </>
  );
};

export default InputFields;
