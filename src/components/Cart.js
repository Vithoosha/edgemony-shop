import "./Cart.css";

function Cart({ cart, manageCart }) {
  const total = cart.reduce((prev, current) => prev + current.price, 0);
  return (
    <div className="Cart">
      <button onClick={manageCart}>✖</button>
      {cart ? cartProduct(cart) : null}
      <p>Total: {Math.round((total + Number.EPSILON) * 100) / 100}</p>
    </div>
  );
}

function cartProduct(cart) {
  return (
    <div className="cart_list">
      {cart.map((item) => {
        return (
          <div className="cart_item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.price}€</p>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
