import "./Card.css";

function Card({ product, showModal }) {
  return (
    <div className="card_wrapper" key={product.id}>
      <img src={product.image} alt={product.title} />
      <h2 className="card_title">{product.title}</h2>
      <div className="card_details">
        <p>{product.price}€</p>
        <button onClick={showModal}>View details</button>
      </div>
    </div>
  );
}

export default Card;
