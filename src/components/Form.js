import React from "react";

const Form = ({
  selectedNode,
  onInputNameChange,
  onInputIPChange,
  onInputPortChange,
  inputNameValue,
  inputIPValue,
  inputPortValue,
}) => {
  function handleChange(e) {
    switch (e.target.name) {
      case "name":
        onInputNameChange(e.target.value);
        break;
      case "IP":
        onInputIPChange(e.target.value);
        break;
      case "port":
        onInputPortChange(e.target.value);
        break;
      default:
        console.log("Nothing");
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target.name.value);
      }}
    >
      <div className="d-flex flex-column px-5 mb-5">
        <div className="text-center mb-3">Выбранный узел</div>
        <div className="mb-2 d-flex justify-content-between px-5">
          <span>Имя:</span>
          <input
            type="text"
            name="name"
            value={inputNameValue}
            placeholder="Введите имя"
            onChange={handleChange}
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
          ></input>
        </div>
      </div>
      <div className="d-flex justify-content-center pt-4">
        <button
          className="btn btn-success"
          type="submit"
          disabled={selectedNode ? (selectedNode.id ? false : true) : true}
        >
          Применить
        </button>
      </div>
    </form>
  );
};

export default Form;
