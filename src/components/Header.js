import "./Header.css";

function Header({ logo, manageCart, cartTotal, cartSize }) {
  return (
    <header>
      <img src={logo} alt="Edgemony" />
      <div className="cart_info">
        {!!cartTotal ? (
          <div>
            <span className="total">{cartTotal}€</span>
            <span>{cartSize}</span>
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
