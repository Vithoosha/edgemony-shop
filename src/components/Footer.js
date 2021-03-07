import "./Footer.css";

function Hero({ company }) {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} {company}
      </p>
    </footer>
  );
}

export default Hero;
