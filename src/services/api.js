const base = "https://fakestoreapi.com/";

async function ReceiveData(endpoint) {
  const res = await fetch(`${base}${endpoint}`);
  const data = await res.json();
  if (res.status >= 400) {
    throw new Error(data.message);
  }
  return data;
}

export async function fetchProducts() {
  return ReceiveData("products");
}
export async function fetchCategories() {
  return ReceiveData("products/categories");
}
export async function fetchProduct(id) {
  return ReceiveData(`products/${id}`);
}
