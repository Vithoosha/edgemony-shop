import { formatPrice } from "../services/utils";
import { CartProduct } from "../components/Index";
import { Link } from "react-router-dom";

function Cart({ products, totalPrice, removeFromCart, setProductQuantity }) {
  return (
    <>
      <Link to="/">X</Link>
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
