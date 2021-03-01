import "./Header.css";

function Header({ logo }) {
  return (
    <header>
      <img src={logo} alt="Edgemony" />
    </header>
  );
}

export default Header;
