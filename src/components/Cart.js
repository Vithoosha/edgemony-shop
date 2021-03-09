import "./Cart.css";
import CartProduct from "./CartProduct";

function Cart({ cart, setCart, manageCart }) {
  const total = cart.reduce((prev, current) => prev + current.price, 0);
  const remove = (item) => {
    const filtered = cart.filter((product) => product.id !== item.id);
    setCart(filtered);
  };

  return (
    <div className="Cart">
      <div className="cart_header">
        <button onClick={manageCart}>✖</button>
        <h3>Cart</h3>
      </div>
      {cart ? (
        <div className="cart_body">
          {cart.map((item) => (
            <CartProduct item={item} remove={remove} />
          ))}
        </div>
      ) : null}
      <div className="cart_footer">
        <p>Total: {Math.round((total + Number.EPSILON) * 100) / 100}</p>
      </div>
    </div>
  );
}

export default Cart;
