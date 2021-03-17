import Card from "./Card.js";
import { useState } from "react";
import "./Products.css";

function Products({ products }) {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const termRegexp = new RegExp(search, "i");
  const filteredProducts = products.filter(
    (product) =>
      product.title.search(termRegexp) !== -1 &&
      (categories.length === 0 || categories.includes(product.category))
  );
  return (
    <>
      <div className="search_wrapper">
        <input
          type="search"
          placeholder="Search here..."
          onChange={(event) => setSearch(event.target.value)}
        />
        {/* da aggiungere le categorie */}
      </div>
      <div className="Products">
        {filteredProducts.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export default Products;
