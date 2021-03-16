import { useState, useEffect } from "react";

export const useModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  function openModal() {
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(false);
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.height = `100vh`;
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.height = ``;
      document.body.style.overflow = ``;
    }
  }, [isModalOpen]);

  return [isModalOpen, openModal, closeModal];
};
