import Card from "./Card.js";
import "./Products.css";

function Products({ products, showModal, addToCart }) {
  return (
    <div className="Products">
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            product={product}
            showModal={() => showModal(product)}
            addToCart={() => addToCart(product)}
          />
        );
      })}
    </div>
  );
}

export default Products;
