import "./../App.css";
import { Hero, Loader, Products, Error, Footer } from "../components/Index";
import { useState, useEffect } from "react";
import { data } from "./../services/data";
import { fetchProducts, fetchCategories } from "./../services/api";

let cache;
function Home() {
  const [products, setProducts] = useState(cache ? cache.products : []);
  const [categories, setCategories] = useState(cache ? cache.categories : []);
  const [isLoading, setIsLoading] = useState(false);
  const [errMess, setErrMess] = useState("");
  const [retry, setRetry] = useState(false);
  console.log({ cache });
  useEffect(() => {
    if (cache !== undefined) {
      return;
    }
    setIsLoading(true);
    Promise.all([fetchProducts(), fetchCategories()])
      .then(([products, categories]) => {
        setProducts(products);
        setCategories(categories);
        cache = { products, categories };
      })
      .catch((err) => setErrMess(err.message))
      .finally(() => setIsLoading(false));
  }, [retry]);

  return (
    <>
      <main>
        <Hero title={data.title} desc={data.description} cover={data.cover} />
        {/* { errMess ? Error : (isLoading ? Loader : Products ) } */}
        {errMess ? (
          <Error
            text={errMess}
            retry={() => setRetry(!retry)}
            close={() => setErrMess("")}
          />
        ) : isLoading ? (
          <Loader />
        ) : (
          <Products products={products} categories={categories} />
        )}
      </main>
      <Footer company={data.company} />
    </>
  );
}

export default Home;
