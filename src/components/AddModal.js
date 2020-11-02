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
  t,
}) {
  function handleChange(e) {
    onModalInputChange(e.target.name, e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      IP: e.target.IP.value,
      port: Number(e.target.port.value),
    };

    try {
      await onAddChildButtonClick({
        ...data,
        parentId: selectedParent.id,
      });
    } catch (err) {
      console.log("ERROR IN SUBMIT", err);
    }

    // if (!serverError) {
    //   close();
    // }
  }

  return (
    <>
      <Modal show={isShown} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{t("AddingNode")}</Modal.Title>
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
              {t("Close")}
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
              {t("Add")}
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default AddModal;
