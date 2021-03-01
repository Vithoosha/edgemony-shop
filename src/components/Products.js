import "./Products.css";

function Products({ products }) {
  return (
    <div className="Products">
      {products.map((product) => {
        return (
          <div className="card_wrapper" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2 className="card_title">{product.title}</h2>
            <div className="card_details">
              <p>${product.price}</p>
              <button>View details</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
