import React from "react";
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
  serverError,
}) => {
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

    onEditButtonClick(selectedNode.id, data);
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
          error={serverError}
        />
      </div>

      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary mb-2"
          type="submit"
          name="action"
          value="updateChild"
          disabled={selectedNode ? (selectedNode.id ? false : true) : true}
        >
          Изменить выбранный узел
        </button>
      </div>
    </form>
  );
};

export default Form;
