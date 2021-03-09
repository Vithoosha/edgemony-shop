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

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  company: "Edgemony S.r.l.",
  urlApi: "https://fakestoreapi.com/products",
};

function App() {
  const [isModal, setIsModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);
  function showModal(product) {
    setContentModal(product);
    setIsModal(true);
  }
  function hideModal() {
    setIsModal(false);
    setContentModal(null);
  }

  const [cart, setCart] = useState([]);
  const [cartState, setCartState] = useState(false);
  const addToCart = (product) =>
    setCart([
      ...cart,
      {
        id: product.id,
        image: product.image,
        price: product.price,
        title: product.title,
        quantity: "1",
      },
    ]);
  const manageCart = () => setCartState(!cartState);

  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errMess, setErrMess] = useState("");
  const [retry, setRetry] = useState(false);
  useEffect(() => {
    fetch(data.urlApi)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        setErrMess(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [retry]);

  return (
    <div className="App">
      <Header logo={data.logo} manageCart={manageCart} cart={cart} />
      <main>
        <Hero title={data.title} desc={data.description} cover={data.cover} />

        {cartState ? (
          <Cart cart={cart} manageCart={manageCart} setCart={setCart} />
        ) : null}

        {errMess ? (
          <Error
            text={errMess}
            retry={() => setRetry(!retry)}
            close={() => setErrMess("")}
          />
        ) : isLoading ? (
          <Loader />
        ) : (
          <Products products={products} showModal={showModal} />
        )}
        <Modal
          isModal={isModal}
          content={contentModal}
          hideModal={hideModal}
          cart={cart}
          addToCart={addToCart}
          setCart={setCart}
        />
      </main>
      <Footer company={data.company} />
    </div>
  );
}

export default App;
