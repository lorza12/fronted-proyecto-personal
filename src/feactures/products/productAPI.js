const API_URL = process.env.REACT_APP_API_URL;

export async function getProducts() {
  const res = await fetch(`${API_URL}/api/products`);
  const data = await res.json();
  return data;
}

export async function productId(id) {
  const res = await fetch(`${API_URL}/api/products/${id}`);
  const data = await res.json();
  return data;
}

export async function createProd(values) {
  const token = localStorage.getItem('token');
  return fetch(`${API_URL}/api/products`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(values),
  }).then((res) => res.json());
}
export default getProducts;
