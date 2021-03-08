import "./Header.css";

function Header({ logo, manageCart, cart }) {
  const total = cart.reduce((prev, current) => prev + current.price, 0);
  return (
    <header>
      <img src={logo} alt="Edgemony" />
      <button onClick={manageCart}>
        <p className="total">
          {Math.round((total + Number.EPSILON) * 100) / 100}€
        </p>
        <p>{cart.length}</p>
        <img
          className="cartImg"
          src="https://i.imgur.com/h2htEiW.png"
          alt="cart"
        />
      </button>
    </header>
  );
}

export default Header;
