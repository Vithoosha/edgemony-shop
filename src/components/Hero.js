import "./Hero.css";

function Hero({ title, desc, cover }) {
  return (
    <div className="Hero">
      <div className="Hero_texts">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className="overlay"></div>
      <img src={cover} alt={title} />
    </div>
  );
}

export default Hero;
