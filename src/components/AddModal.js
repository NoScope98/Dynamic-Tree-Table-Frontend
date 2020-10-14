import React from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "./Form";

function AddModal({ close, isShown }) {
  //   const [isShown, setIsShown] = useState(false);

  //   const close = () => setIsShown(false);
  //   const show = () => setIsShown(true);

  return (
    <>
      {/* <Button variant="primary" onClick={show}>
        Launch demo modal
      </Button> */}

      <Modal show={isShown} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Добавление узла</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form />
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
