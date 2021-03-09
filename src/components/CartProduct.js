import "./Cart.css";

function CartProduct({ item, remove }) {
  return (
    <div className="cart_item" key={item.id}>
      <div className="cart_img_title">
        <img src={item.image} alt={item.title} />
        <p>{item.title}</p>
      </div>
      <div className="cart_info">
        <p>{item.price}€</p>
        <p>Qty: {item.quantity}</p>
        {/* <button>+</button>
                <button>-</button> */}
      </div>
      <button onClick={() => remove(item)}>Remove</button>
    </div>
  );
}

export default CartProduct;
