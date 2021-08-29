import React, { useState } from "react";
import Modal from "./Modal";

const ModalConnected = () => {
  const [show, setShow] = useState(false);

  return (
    <Modal show={show} setShow={setShow}>
      <h2>Delete</h2>
    </Modal>
  );
};

export default ModalConnected;
