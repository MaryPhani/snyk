import React from "react";
import { Button, Modal } from 'antd';

const BasicModal = ({ isOpen, onCancel, ...props }) => {
  if (!isOpen) return null;

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleOverlayClick = () => {
    onClose();
  };

  return (
    <Modal
      title="Vertically centered modal dialog"
      centered
      open={isOpen}
      onOk={() => props?.onOk()}
      onCancel={onCancel}
    >
      {props?.children}
    </Modal>
  );
};

export default BasicModal;
