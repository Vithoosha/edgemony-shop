import "./App.css";
import {
  Header,
  Cart,
  Hero,
  Loader,
  Products,
  Error,
  Modal,
  Footer,
} from "./components/Index";
import { useState, useEffect } from "react";

// const fakeProducts = require("./mocks/data/products.json");

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  // products: fakeProducts,
  company: "Edgemony S.r.l.",
  urlApi: "https://fakestoreapi.com/products",
};

function App() {
  const [isModal, setIsModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);

  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errMess, setErrMess] = useState("");
  const [retry, setRetry] = useState(false);

  const [cart, setCart] = useState([]);
  const [cartState, setCartState] = useState(false);

  function addToCart(product) {
    setCart([...cart, product]);
    console.log(cart);
  }

  function manageCart() {
    setCartState(!cartState);
  }

  function showModal(product) {
    setContentModal(product);
    setIsModal(true);
  }

  function hideModal() {
    setIsModal(false);
    setContentModal(null);
  }

  useEffect(() => {
    fetch(data.urlApi)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrMess(error.message);
        setIsError(true);
      });
  }, [retry]);

  return (
    <div className="App">
      <Header logo={data.logo} manageCart={manageCart} cart={cart} />
      {cartState ? <Cart cart={cart} manageCart={manageCart} /> : null}
      <main>
        <Hero title={data.title} desc={data.description} cover={data.cover} />

        {isError ? (
          <Error
            text={errMess}
            retry={() => setRetry(!retry)}
            close={() => setErrMess("")}
          />
        ) : isLoading ? (
          <Loader />
        ) : (
          <Products
            products={products}
            showModal={showModal}
            addToCart={addToCart}
          />
        )}
        <Modal
          isModal={isModal}
          product={contentModal}
          hideModal={hideModal}
          addToCart={addToCart}
        />
      </main>
      <Footer company={data.company} />
    </div>
  );
}

export default App;
