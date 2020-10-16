import React from "react";

const InputFields = ({
  handleChange,
  inputNameValue,
  inputIPValue,
  inputPortValue,
  error,
  isValid,
}) => {
  return (
    <>
      <div className="mb-2">
        <label htmlFor="inputName" className="form-label">
          Имя
        </label>
        <input
          className={`form-control ${
            error || !isValid.isNameValid ? "is-invalid" : ""
          }`}
          id="inputName"
          type="text"
          name="name"
          value={inputNameValue}
          placeholder="Введите имя"
          onChange={handleChange}
        ></input>
        <div className="invalid-feedback">
          {error ? error : "Неккоректный формат имени"}
        </div>
      </div>
      <div className="mb-2">
        <label htmlFor="inputIP" className="form-label">
          IP-адрес
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
        <div className="invalid-feedback">Некорректный формат IP-адреса</div>
      </div>
      <div className="">
        <label htmlFor="inputPort" className="form-label">
          Порт
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
        <div className="invalid-feedback">Некорректный формат номера порта</div>
      </div>
    </>
  );
};

export default InputFields;
