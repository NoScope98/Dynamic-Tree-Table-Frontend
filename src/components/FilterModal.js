import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const FilterModal = ({
  isShown,
  close,
  filterColumn,
  onConfirmFilterButtonClick,
}) => {
  const [inputFilter, setInputFilter] = useState("");
  const [isValid, setIsValid] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();

    onConfirmFilterButtonClick(filterColumn, inputFilter);
    close();
  };

  //   const onChange = async (e) => {
  //     setInputFilter(e.target.value);
  //   };

  const checkValidity = () => {
    //const pattern = new RegExp("(.|\\s)*\\S(.|\\s)*");
    if (inputFilter.length) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <>
      <Modal show={isShown} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Добавление фильтра</Modal.Title>
        </Modal.Header>
        <form onSubmit={onSubmit}>
          <Modal.Body>
            <label htmlFor="inputFilter" className="form-label">
              Фильтр
            </label>
            <input
              id="inputFilter"
              type="text"
              name="filter"
              className={`form-control ${isValid ? "" : "is-invalid"}`}
              placeholder="Введите фильтр"
              value={inputFilter}
              onChange={(e) => {
                setInputFilter(e.target.value);
                // console.log(inputFilter);
                checkValidity();
              }}
            ></input>
            <div className="invalid-feedback">Заполните поле</div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" variant="secondary" onClick={close}>
              Закрыть
            </Button>
            <Button type="submit" variant="primary">
              Отфильтровать
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default FilterModal;
