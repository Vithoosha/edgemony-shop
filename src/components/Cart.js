import "./Cart.css";
import CartProduct from "./CartProduct";
import { formatPrice } from "../services/utils";

function Cart({ products, totalPrice, removeFromCart, setProductQuantity }) {
  return (
    <>
      {products.length > 0 ? (
        <div className="Cart">
          {products.map((product) => (
            <CartProduct
              key={product.id}
              product={product}
              remove={removeFromCart}
              setQuantity={setProductQuantity}
            />
          ))}
        </div>
      ) : null}
      <div className="cart_footer">
        <p>Total: {formatPrice(totalPrice)}</p>
      </div>
    </>
  );
}

export default Cart;
