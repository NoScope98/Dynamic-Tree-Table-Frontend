import React, { useState } from "react";
import { DeleteIcon, AddIcon } from "../icons/icons";
import InputFields from "./InputFields";

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
      onAddChildButtonClick({
        ...data,
        parentId: selectedNode.id,
      });
    }
    if (operation === "update") {
      onEditButtonClick(selectedNode.id, data);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="d-flex flex-column mb-5 mx-3">
        <div className="text-center mb-3">Узел</div>
        <InputFields
          handleChange={handleChange}
          inputNameValue={inputNameValue}
          inputIPValue={inputIPValue}
          inputPortValue={inputPortValue}
        />
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
