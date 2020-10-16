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
    //   alert("ЗАКРЫВАЮ");
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
            {serverError && (
              <div className="d-flex justify-content-center mb-3 text-danger">
                {serverError}
              </div>
            )}
            <InputFields handleChange={handleChange} />
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" variant="secondary" onClick={close}>
              Закрыть
            </Button>
            <Button type="submit" variant="primary">
              Добавить
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default AddModal;
