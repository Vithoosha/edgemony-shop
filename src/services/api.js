const baseURL = "https://fakestoreapi.com";

async function callAPI(endpoint) {
  const response = await fetch(`${baseURL}/${endpoint}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.message);
  }
  return data;
}

export async function fetchProducts() {
  return callAPI("products");
}

export async function fetchProduct(id) {
  return callAPI(`products/${id}`);
}

export async function fetchCategories() {
  return callAPI("products/categories");
}
