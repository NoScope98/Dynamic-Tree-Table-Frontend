import React from "react";
import { useTranslation } from "react-i18next";

const InputFields = ({ handleChange, error, formData }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="mb-2">
        <label htmlFor="inputName" className="form-label">
          {t("Name")}
        </label>
        <input
          className={`form-control ${
            error || !formData.name.isValid ? "is-invalid" : ""
          }`}
          id="inputName"
          type="text"
          name="name"
          value={formData.name.value}
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
          className={`form-control ${!formData.IP.isValid ? "is-invalid" : ""}`}
          id="inputIP"
          type="text"
          name="IP"
          value={formData.IP.value}
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
          className={`form-control ${
            !formData.port.isValid ? "is-invalid" : ""
          }`}
          id="inputPort"
          type="text"
          name="port"
          value={formData.port.value}
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
