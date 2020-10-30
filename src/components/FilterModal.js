import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const FilterModal = ({
  isShown,
  close,
  filterColumn,
  onConfirmFilterButtonClick,
  t,
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
          <Modal.Title>{t("AddingFilter")}</Modal.Title>
        </Modal.Header>
        <form onSubmit={onSubmit}>
          <Modal.Body>
            <label htmlFor="inputFilter" className="form-label">
              {t("Filter")}
            </label>
            <input
              id="inputFilter"
              type="text"
              name="filter"
              className={`form-control ${isValid ? "" : "is-invalid"}`}
              placeholder={t("EnterFilter")}
              value={inputFilter}
              onChange={(e) => {
                setInputFilter(e.target.value);
                setIsValid(true);
              }}
            ></input>
            <div className="invalid-feedback">{t("FillThisField")}</div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" variant="secondary" onClick={close}>
              {t("Close")}
            </Button>
            <Button type="submit" variant="primary" onClick={checkValidity}>
              {t("ConfirmFilter")}
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default FilterModal;
