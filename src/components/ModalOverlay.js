import "./ModalOverlay.css";
function ModalOverlay({ isOpen, isClose, children }) {
  return (
    <div className={`ModalOverlay ${isOpen ? "isOpen" : ""}`} onClick={isClose}>
      {children}
    </div>
  );
}

export default ModalOverlay;
