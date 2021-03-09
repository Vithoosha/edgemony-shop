import "./Modal.css";

function Modal({ isModal, content, hideModal, cart, addToCart, setCart }) {
  const isAlreadyInCart = () =>
    cart.find((product) => product.id === content.id);

  const toggle = () => {
    if (isAlreadyInCart()) {
      const filtered = cart.filter((product) => product.id !== content.id);
      setCart(filtered);
    } else {
      addToCart(content);
    }
  };
  return (
    <div className={`modal_wrapper ${isModal ? "show" : ""}`}>
      {content ? (
        <div className="modal_body">
          <div className="modal_btn">
            <button className="close_btn" onClick={hideModal}>
              ✖
            </button>
          </div>
          <img src={content.image} alt={content.title} />
          <h2>{content.title}</h2>
          <p>{content.description}</p>
          <p>{content.price}</p>
          <button onClick={toggle}>
            {!isAlreadyInCart() ? "Add to cart" : "Remove"}
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
