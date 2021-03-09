import "./Header.css";

function Header({ logo, manageCart, cart }) {
  const total = cart.reduce((prev, current) => prev + current.price, 0);
  return (
    <header>
      <img src={logo} alt="Edgemony" />
      <div className="cart_info">
        {!!total ? (
          <div>
            <span className="total">
              {Math.round((total + Number.EPSILON) * 100) / 100}€
            </span>
            <span>{cart.length}</span>
          </div>
        ) : null}
        <button onClick={manageCart}>
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
