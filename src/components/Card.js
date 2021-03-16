import "./Card.css";
import { Link } from "react-router-dom";

function Card({ product }) {
  return (
    <div className="card_wrapper" key={product.id}>
      <img src={product.image} alt={product.title} />
      <h2 className="card_title">{product.title}</h2>
      <div className="card_details">
        <p>{product.price}€</p>
        <Link to={`/product/${product.id}`}>View details</Link>
      </div>
    </div>
  );
}

export default Card;
