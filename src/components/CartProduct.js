import "./CartProduct.css";

function CartProduct({ product, remove, setQuantity }) {
  const increment = () => setQuantity(product.id, product.quantity + 1);
  const decrement = () => setQuantity(product.id, product.quantity - 1);
  return (
    <div className="cart_item">
      <div className="cart_img_title">
        <img src={product.image} alt={product.title} />
        <p>{product.title}</p>
      </div>
      <div className="cart_info">
        <p>{product.price}€</p>
        <button onClick={decrement} disabled={product.quantity === 1}>
          -
        </button>
        <p>{product.quantity}</p>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={() => remove(product.id)}>Remove</button>
    </div>
  );
}

export default CartProduct;
