import React from "react";

const Form = ({
  selectedNode,
  onInputChange,
  inputNameValue,
  inputIPValue,
  inputPortValue,
  onEditButtonClick,
}) => {
  function handleChange(e) {
    onInputChange(e.target.name, e.target.value);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const newData = {
          name: e.target.name.value,
          IP: e.target.IP.value,
          port: e.target.port.value,
        };
        onEditButtonClick(selectedNode.id, newData);
      }}
    >
      <div className="d-flex flex-column px-5 mb-5">
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
          <span>Ip адрес:</span>
          <input
            type="text"
            name="IP"
            value={inputIPValue}
            placeholder="Введите IP адрес"
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
            placeholder="Введите порт"
            onChange={handleChange}
            required
          ></input>
        </div>
      </div>
      <div className="d-flex justify-content-center pt-4">
        <button
          className="btn btn-success"
          type="submit"
          disabled={selectedNode ? (selectedNode.id ? false : true) : true}
        >
          Изменить выбранный узел
        </button>
      </div>
    </form>
  );
};

export default Form;
