import React from "react";
import { Button, Modal } from "react-bootstrap";
import InputFields from "./InputFields";

function AddModal({ close, isShown }) {
  return (
    <>
      <Modal show={isShown} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Добавление узла</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputFields />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={close}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;
