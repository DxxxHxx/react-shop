export async function getAllProducts() {
  const URL = `https://fakestoreapi.com/products`;
  const res = await fetch(URL).then((res) => res.json());

  return res;
}

export async function getSingleProduct(id: number) {
  const URL = `https://fakestoreapi.com/products/${id}`;

  const res = await fetch(URL).then((res) => res.json());

  return res;
}
