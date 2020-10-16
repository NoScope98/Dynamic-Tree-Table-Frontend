import React from "react";

const InputFields = ({
  handleChange,
  inputNameValue,
  inputIPValue,
  inputPortValue,
  error,
}) => {
  // Регулярные выражения для валидации формы
  const regExp = "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
  const fullRegExpIP = `${regExp}.${regExp}.${regExp}.${regExp}`;
  const RegExpPort =
    "([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])";

  return (
    <>
      <div className="mb-2">
        <label for="inputName" class="form-label">
          Имя
        </label>
        <input
          className={`form-control ${error ? "is-invalid" : ""}`}
          id="inputName"
          type="text"
          name="name"
          value={inputNameValue}
          placeholder="Введите имя"
          onChange={handleChange}
          required
        ></input>
        <div class="invalid-feedback">{error}</div>
      </div>
      <div className="mb-2">
        <label for="inputIP" class="form-label">
          IP-адрес
        </label>
        <input
          className="form-control"
          id="inputIP"
          type="text"
          name="IP"
          value={inputIPValue}
          placeholder="0.0.0.0"
          pattern={fullRegExpIP}
          onChange={handleChange}
          required
        ></input>
      </div>
      <div className="">
        <label for="inputPort" class="form-label">
          Порт
        </label>
        <input
          className="form-control"
          id="inputPort"
          type="text"
          name="port"
          value={inputPortValue}
          placeholder="0000"
          pattern={RegExpPort}
          onChange={handleChange}
          required
        ></input>
      </div>
    </>
  );
};

export default InputFields;
