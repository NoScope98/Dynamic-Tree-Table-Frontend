import React from "react";

const InputFields = ({
  handleChange,
  inputNameValue,
  inputIPValue,
  inputPortValue,
}) => {
  // Регулярные выражения для валидации формы
  const regExp = "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
  const fullRegExpIP = `${regExp}.${regExp}.${regExp}.${regExp}`;
  const RegExpPort =
    "([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])";

  return (
    <>
      <div className="mb-2 d-flex justify-content-between px-5">
        <span>Имя:</span>
        <input
          type="text"
          name="name"
          value={inputNameValue}
          placeholder="Введите имя"
          onChange={handleChange}
          required
        ></input>
      </div>
      <div className="mb-2 d-flex justify-content-between px-5">
        <span>IP:</span>
        <input
          type="text"
          name="IP"
          value={inputIPValue}
          placeholder="0.0.0.0"
          pattern={fullRegExpIP}
          onChange={handleChange}
          required
        ></input>
      </div>
      <div className="d-flex justify-content-between px-5">
        <span>Порт:</span>
        <input
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
