import "./ModalSidebar.css";
function ModalSidebar({ isOpen, isClose, title, children, flex }) {
  return (
    <div className={`ModalSidebar ${isOpen ? "isOpen" : ""}`}>
      <div className="Sidebar_header">
        <button onClick={isClose}>✖</button>
        <h3>{title}</h3>
      </div>
      <div className={`Sidebar_body ${flex}`}>{children}</div>
    </div>
  );
}

export default ModalSidebar;
