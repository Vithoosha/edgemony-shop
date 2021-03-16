import "./Header.css";
import { Link } from "react-router-dom";
import { formatPrice } from "../services/utils";

function Header({ logo, title, cartTotal, cartSize }) {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt={title} />
      </Link>
      <div className="cart_info">
        {!!cartTotal ? (
          <div>
            <span className="total">{formatPrice(cartTotal)}</span>
            <span>{cartSize}</span>
          </div>
        ) : null}
        <Link to="/cart">
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </div>
    </header>
  );
}

export default Header;
