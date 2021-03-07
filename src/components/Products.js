import Card from "./Card.js";
import "./Products.css";

function Products({ products, showModal }) {
  return (
    <div className="Products">
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            product={product}
            showModal={() => showModal(product)}
          />
        );
      })}
    </div>
  );
}

export default Products;
