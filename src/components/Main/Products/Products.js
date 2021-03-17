import Card from "./Card.js";
import CategoriesFilter from "./CategoriesFilter";
import { useLocation, useHistory } from "react-router-dom";
import "./Products.css";

function Products({ products, categories }) {
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);

  const searchTerm = searchParams.get("q") || "";
  function updateSearchTerm(term) {
    if (term) {
      searchParams.set("q", term);
    } else {
      searchParams.delete("q");
    }
    history.push({
      search: "?" + searchParams.toString(),
    });
  }

  const selectedCategoriesParam = searchParams.get("categories");
  const selectedCategories = selectedCategoriesParam
    ? selectedCategoriesParam.split(",")
    : [];
  function updateCategories(categories) {
    const selectedParam = categories.join(",");
    if (categories.lenght === 0) {
      searchParams.delete("categories");
    } else {
      searchParams.set("categories", selectedParam);
    }
    history.push({
      search: "?" + searchParams.toString(),
    });
  }

  const termRegexp = new RegExp(searchTerm, "i");
  const filteredProducts = products.filter(
    (product) =>
      product.title.search(termRegexp) !== -1 &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category))
  );
  return (
    <>
      <div className="search_wrapper">
        <input
          type="search"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => updateSearchTerm(e.target.value)}
        />
        <CategoriesFilter
          categories={categories}
          selectedCategories={selectedCategories}
          onSelectCategory={updateCategories}
        />
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
