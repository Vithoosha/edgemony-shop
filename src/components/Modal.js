import "./Modal.css";

function Modal({ isModal, product, hideModal }) {
  return (
    <div className={`modal_wrapper ${isModal ? "show" : ""}`}>
      {product ? (
        <div className="modal_body">
          <div className="modal_btn">
            <button className="close_btn" onClick={hideModal}>
              ✖
            </button>
          </div>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
