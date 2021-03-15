import "./App.css";
import {
  Header,
  Cart,
  Hero,
  Loader,
  Products,
  Error,
  ModalProduct,
  Footer,
} from "./components/Index";
import ModalSidebar from "./components/ModalSidebar";
import ModalOverlay from "./components/ModalOverlay";
import { useState, useEffect } from "react";
import { data } from "./services/data";
import { fetchProducts, fetchCategories } from "./services/api";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errMess, setErrMess] = useState("");
  const [retry, setRetry] = useState(false);
  useEffect(() => {
    Promise.all([fetchProducts(), fetchCategories()])
      .then(([products, categories]) => {
        setProducts(products);
        setCategories(categories);
      })
      .catch((err) => setErrMess(err.message))
      .finally(() => setIsLoading(false));
  }, [retry]);

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
  const manageCart = () => setCartState(!cartState);
  const cartProducts = cart.map((cartItem) => {
    const { price, image, title, id } = products.find(
      (p) => p.id === cartItem.id
    );
    return { price, image, title, id, quantity: cartItem.quantity };
  });
  const cartTotal = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  function isInCart(product) {
    return product != null && cart.find((p) => p.id === product.id) != null;
  }
  function addToCart(productId) {
    setCart([...cart, { id: productId, quantity: 1 }]);
  }
  function removeFromCart(productId) {
    setCart(cart.filter((product) => product.id !== productId));
  }
  function setProductQuantity(productId, quantity) {
    setCart(
      cart.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      )
    );
  }

  return (
    <div className="App">
      <Header
        logo={data.logo}
        manageCart={manageCart}
        cartTotal={cartTotal}
        cartSize={cart.length}
        products={products}
      />
      <main>
        <Hero title={data.title} desc={data.description} cover={data.cover} />
        <ModalOverlay isOpen={cartState} isClose={manageCart}>
          <ModalSidebar
            isOpen={cartState}
            isClose={manageCart}
            title="Cart"
            flex="flex"
          >
            <Cart
              products={cartProducts}
              totalPrice={cartTotal}
              removeFromCart={removeFromCart}
              setProductQuantity={setProductQuantity}
            />
          </ModalSidebar>
        </ModalOverlay>

        {/* { errMess ? Error : (isLoading ? Loader : Products ) } */}
        {errMess ? (
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
            categories={categories}
          />
        )}

        <ModalProduct
          isModal={isModal}
          content={contentModal}
          hideModal={hideModal}
          isInCart={isInCart(contentModal)}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </main>
      <Footer company={data.company} />
    </div>
  );
}

export default App;
