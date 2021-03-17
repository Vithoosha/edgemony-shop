import "./../App.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchProduct } from "./../services/api";
import { Loader, Error } from "../components/Index";

function Product({ addToCart, removeFromCart, isInCart }) {
  let { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errMess, setErrMess] = useState("");
  const [retry, setRetry] = useState(false);
  useEffect(() => {
    fetchProduct(productId)
      .then((product) => {
        setProduct(product);
      })
      .catch((err) => setErrMess(err.message))
      .finally(() => setIsLoading(false));
  }, [productId, retry]);

  const toggleCart = () => {
    if (isInCart(product)) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <main>
      {errMess ? (
        <Error
          text={errMess}
          retry={() => setRetry(!retry)}
          close={() => setErrMess("")}
        />
      ) : isLoading ? (
        <Loader />
      ) : (
        <div className="ProductDetail">
          <img src={product.image} alt={product.title} />
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.price}€</p>
          <button onClick={toggleCart}>
            {isInCart(product) ? "remove" : "add to cart"}
          </button>
        </div>
      )}
    </main>
  );
}

export default Product;
