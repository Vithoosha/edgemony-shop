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
// https://freefrontend.com/css-cards/
// https://dribbble.com/tags/ecommerce
// https://github.com/Vithoosha/es-25-02/blob/main/src/components/Footer.js
// https://github.com/edgemony-coding-bootcamp/edgemony-shop/blob/esercitazione-01-03-21/exercises/01-03-21.md
