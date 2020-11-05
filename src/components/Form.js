import React from "react";
import InputFields from "./InputFields";

const Form = ({
  selectedNode,
  onInputChange,
  onEditButtonClick,
  serverError,
  formData,
  t,
}) => {
  function handleChange(e) {
    onInputChange({ targetName: e.target.name, value: e.target.value });
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
              : t("Node")
            : t("Node")}
        </div>
        <InputFields
          handleChange={handleChange}
          error={serverError}
          formData={formData}
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
              formData.name.isValid &&
              formData.IP.isValid &&
              formData.port.isValid
            )
          }
        >
          {t("ChangeCurrentNode")}
        </button>
      </div>
    </form>
  );
};

export default Form;
