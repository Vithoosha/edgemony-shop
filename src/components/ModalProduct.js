import "./ModalProduct.css";

function ModalProduct({
  isModal,
  content,
  hideModal,
  isInCart,
  addToCart,
  removeFromCart,
}) {
  const toggleCart = () => {
    if (isInCart) {
      removeFromCart(content.id);
    } else {
      addToCart(content.id);
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
          <button onClick={toggleCart}>
            {!isInCart ? "Add to cart" : "Remove"}
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default ModalProduct;
