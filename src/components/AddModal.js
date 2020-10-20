import React from "react";
import { Button, Modal } from "react-bootstrap";
import InputFields from "./InputFields";

function AddModal({
  close,
  isShown,
  onAddChildButtonClick,
  selectedParent,
  serverError,
  onModalInputChange,
  isAddFormValid,
  formData,
}) {
  function handleChange(e) {
    onModalInputChange(e.target.name, e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      IP: e.target.IP.value,
      port: Number(e.target.port.value),
    };

    onAddChildButtonClick({
      ...data,
      parentId: selectedParent.id,
    });

    // if (!serverError) {
    //   close();
    // }
  }

  return (
    <>
      <Modal show={isShown} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Добавление узла</Modal.Title>
        </Modal.Header>
        <form onSubmit={onSubmit}>
          <Modal.Body>
            <InputFields
              handleChange={handleChange}
              error={serverError}
              isValid={isAddFormValid}
              inputNameValue={formData.name}
              inputIPValue={formData.IP}
              inputPortValu={formData.port}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" variant="secondary" onClick={close}>
              Закрыть
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={
                !(
                  isAddFormValid.isNameValid &&
                  isAddFormValid.isIPValid &&
                  isAddFormValid.isPortValid
                )
              }
            >
              Добавить
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default AddModal;
