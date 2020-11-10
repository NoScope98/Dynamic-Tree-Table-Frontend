import React from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { Button, Modal } from "react-bootstrap";
import InputFields from "./InputFields";

function AddModal({
  close,
  isShown,
  onAddChildButtonClick,
  selectedParent,
  serverError,
  onModalInputChange,
  formData,
  t,
}) {
  function handleChange(e) {
    onModalInputChange({ targetName: e.target.name, value: e.target.value });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      IP: e.target.IP.value,
      port: Number(e.target.port.value),
    };

    try {
      const result = await onAddChildButtonClick({
        ...data,
        parentId: selectedParent.id,
      });
      unwrapResult(result);
      close();
    } catch (err) {
      console.log("ERROR IN SUBMIT", err);
    }
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
              formData={formData}
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
                  formData.name.isValid &&
                  formData.IP.isValid &&
                  formData.port.isValid
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
