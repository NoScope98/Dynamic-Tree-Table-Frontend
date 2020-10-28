import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const FilterModal = ({
  isShown,
  close,
  filterColumn,
  onConfirmFilterButtonClick,
  language,
}) => {
  const [inputFilter, setInputFilter] = useState("");
  const [isValid, setIsValid] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();

    if (isValid) {
      onConfirmFilterButtonClick(filterColumn, inputFilter);
      close();
    } else {
      setIsValid(false);
    }
  };

  const checkValidity = () => {
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
          <Modal.Title>
            {language === "ru" ? "Добавление фильтра" : "Adding filter"}
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={onSubmit}>
          <Modal.Body>
            <label htmlFor="inputFilter" className="form-label">
              {language === "ru" ? "Фильтр" : "Filter"}
            </label>
            <input
              id="inputFilter"
              type="text"
              name="filter"
              className={`form-control ${isValid ? "" : "is-invalid"}`}
              placeholder={
                language === "ru" ? "Введите фильтр" : "Enter filter"
              }
              value={inputFilter}
              onChange={(e) => {
                setInputFilter(e.target.value);
                setIsValid(true);
              }}
            ></input>
            <div className="invalid-feedback">
              {language === "ru" ? "Заполните поле" : "Fill this field"}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" variant="secondary" onClick={close}>
              {language === "ru" ? "Закрыть" : "Close"}
            </Button>
            <Button type="submit" variant="primary" onClick={checkValidity}>
              {language === "ru" ? "Применить фильтр" : "Confirm filter"}
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default FilterModal;
