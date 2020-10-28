import React from "react";
import InputFields from "../containers/InputFields";

const Form = ({
  selectedNode,
  onInputChange,
  onEditButtonClick,
  serverError,
  isEditFormValid,
  formData,
  language,
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
        <div className="text-center mb-3">
          {selectedNode
            ? selectedNode.name
              ? selectedNode.name
              : language === "ru"
              ? "Узел"
              : "Node"
            : language === "ru"
            ? "Узел"
            : "Node"}
        </div>
        <InputFields
          handleChange={handleChange}
          inputNameValue={formData.name}
          inputIPValue={formData.IP}
          inputPortValue={formData.port}
          error={serverError}
          isValid={isEditFormValid}
        />
      </div>

      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary mb-2"
          type="submit"
          name="action"
          value="updateChild"
          disabled={
            (selectedNode ? (selectedNode.id ? false : true) : true) ||
            !(
              isEditFormValid.isNameValid &&
              isEditFormValid.isIPValid &&
              isEditFormValid.isPortValid
            )
          }
        >
          {language === "ru"
            ? "Изменить выбранный узел"
            : "Change current node"}
        </button>
      </div>
    </form>
  );
};

export default Form;
