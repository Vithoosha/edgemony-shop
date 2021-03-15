import "./ModalOverlay.css";
function ModalOverlay({ isOpen, isClose, children }) {
  return (
    <div className={`ModalOverlay ${isOpen ? "isOpen" : ""}`} onClick={isClose}>
      <div className="modal_overlay">{children}</div>
    </div>
  );
}

export default ModalOverlay;
