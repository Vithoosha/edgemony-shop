import "./ModalCenter.css";
function ModalCenter({ isOpen, isClose, title, children }) {
  return (
    <div className={`modal_body ${isOpen ? "isOpen" : ""}`}>
      <div className="modal_btn">
        <button className="close_btn" onClick={isClose}>
          ✖
        </button>
      </div>
      {children}
    </div>
  );
}

export default ModalCenter;
