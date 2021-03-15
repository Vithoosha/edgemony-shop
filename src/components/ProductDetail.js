import "./ProductDetail.css";

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
    <div className="ProductDetail">
      {content ? (
        <>
          <img src={content.image} alt={content.title} />
          <h2>{content.title}</h2>
          <p>{content.description}</p>
          <p>{content.price}</p>
          <button onClick={toggleCart}>
            {!isInCart ? "Add to cart" : "Remove"}
          </button>
        </>
      ) : null}
    </div>
  );
}

export default ModalProduct;
