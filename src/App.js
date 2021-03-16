import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Index";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Page404 from "./pages/Page404";
import { useState, useEffect } from "react";
import { data } from "./services/data";
// import { useModal } from "./services/useModal";

function App() {
  // const [isCartModalOpen, openCartModal, closeCartModal] = useModal();
  const [cart, setCart] = useState([]);
  const [cartState, setCartState] = useState(false);
  const cartTotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  function isInCart(product) {
    return product != null && cart.find((p) => p.id === product.id) != null;
  }
  function addToCart(product) {
    setCart([...cart, { ...product, quantity: 1 }]);
    console.log(cart);
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
    <Router>
      <div className="App">
        <Header
          logo={data.logo}
          title={data.title}
          cartTotal={cartTotal}
          cartSize={cart.length}
          setCartState={setCartState}
          // onCartClick={openCartModal}
        />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product/:productId">
            <Product
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              isInCart={isInCart}
            />
          </Route>
          <Route path="/cart">
            <Cart
              products={cart}
              totalPrice={cartTotal}
              removeFromCart={removeFromCart}
              setProductQuantity={setProductQuantity}
            />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
