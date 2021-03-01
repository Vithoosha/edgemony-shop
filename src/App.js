import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";

const fakeProducts = require("./mocks/data/products.json");

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  products: fakeProducts,
  company: "Edgemony S.r.l.",
};

function App() {
  return (
    <div className="App">
      <Header logo={data.logo} />
      <main>
        <Hero title={data.title} desc={data.description} cover={data.cover} />
        <Products products={fakeProducts} />
      </main>
      <Footer company={data.company} />
    </div>
  );
}

export default App;
