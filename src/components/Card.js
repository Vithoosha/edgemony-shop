import { useState } from "react";
import "./Card.css";

function Card({ product, showModal, addToCart }) {
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="card_wrapper" key={product.id}>
      <img src={product.image} alt={product.title} />
      <h2 className="card_title">{product.title}</h2>
      <div className="card_details">
        <p>{product.price}€</p>
        <button onClick={showModal}>View details</button>
        <button
          onClick={() => {
            addToCart(product);
            setDisabled(true);
          }}
          disabled={disabled}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
