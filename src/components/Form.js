import React, { useState } from "react";
import { DeleteIcon, AddIcon } from "../icons/icons";

const Form = ({
  selectedNode,
  onInputChange,
  inputNameValue,
  inputIPValue,
  inputPortValue,
  onEditButtonClick,
  formData,
  onAddChildButtonClick,
  onDeleteNodeButtonClick,
}) => {
  // Состояние для обработки формы двумя кнопками
  const [operation, setOperation] = useState("");

  function handleChange(e) {
    onInputChange(e.target.name, e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      IP: e.target.IP.value,
      port: Number(e.target.port.value),
    };

    if (operation === "add") {
      onAddChildButtonClick(selectedNode.id, {
        ...data,
        parentId: selectedNode.id,
      });
    }
    if (operation === "update") {
      onEditButtonClick(selectedNode.id, data);
    }
  }

  // Регулярные выражения для валидации формы
  const regExp = "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
  const fullRegExpIP = `${regExp}.${regExp}.${regExp}.${regExp}`;
  const RegExpPort =
    "([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])";

  return (
    <form onSubmit={onSubmit}>
      <div className="d-flex flex-column mb-5 mx-3">
        <div className="text-center mb-3">Узел</div>
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
      </div>

      {/* Кнопки */}

      <div className="d-flex flex-column justify-content-center pt-4 px-4 mx-5">
        <button
          onClick={() => {
            setOperation("update");
          }}
          className="btn btn-success mb-2"
          type="submit"
          name="action"
          value="updateChild"
          disabled={selectedNode ? (selectedNode.id ? false : true) : true}
        >
          Изменить выбранный узел
        </button>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            onClick={() => {
              setOperation("add");
            }}
            type="submit"
            className="btn btn-primary rounded"
            // style={style.button}
            disabled={selectedNode ? (selectedNode.id ? false : true) : true}
          >
            <AddIcon />
          </button>
          <button
            type="button"
            className="btn btn-primary rounded"
            name="action"
            value="addChild"
            // style={style.button}
            disabled={selectedNode ? (selectedNode.id ? false : true) : true}
            onClick={() => {
              onDeleteNodeButtonClick(selectedNode.id, selectedNode.parentId);
            }}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
