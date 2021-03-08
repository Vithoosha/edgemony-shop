import { useState } from "react";
import "./Modal.css";

function Modal({ isModal, product, hideModal, addToCart }) {
  const [disabled, setDisabled] = useState(false);

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
          <button
            disabled={disabled}
            onClick={() => {
              addToCart(product);
              setDisabled(true);
            }}
          >
            Add to cart
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
