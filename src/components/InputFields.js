import React from "react";

const InputFields = ({
  handleChange,
  inputNameValue,
  inputIPValue,
  inputPortValue,
  error,
  isValid,
  language,
}) => {
  return (
    <>
      <div className="mb-2">
        <label htmlFor="inputName" className="form-label">
          {language === "ru" ? "Имя" : "Name"}
        </label>
        <input
          className={`form-control ${
            error || !isValid.isNameValid ? "is-invalid" : ""
          }`}
          id="inputName"
          type="text"
          name="name"
          value={inputNameValue}
          placeholder={language === "ru" ? "Введите имя" : "Enter name"}
          onChange={handleChange}
        ></input>
        <div className="invalid-feedback">
          {error
            ? error === "UniqueConstraintError"
              ? language === "ru"
                ? "Такое имя уже существует"
                : "This name already exists"
              : null
            : language === "ru"
            ? "Неккоректный формат имени"
            : "Incorrect name format"}
        </div>
      </div>
      <div className="mb-2">
        <label htmlFor="inputIP" className="form-label">
          {language === "ru" ? "IP-адрес" : "IP-address"}
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
        <div className="invalid-feedback">
          {language === "ru"
            ? "Некорректный формат IP-адреса"
            : "Incorrect IP format"}
        </div>
      </div>
      <div className="">
        <label htmlFor="inputPort" className="form-label">
          {language === "ru" ? "Порт" : "Port"}
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
        <div className="invalid-feedback">
          {language === "ru"
            ? "Некорректный формат номера порта"
            : "Incorrect port number format"}
        </div>
      </div>
    </>
  );
};

export default InputFields;
