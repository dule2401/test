export type TProduct = {
  index: number;
  name: string;
  avatarUrl: string;
  price: number;
  originalPrice: number;
  count?: number;
};

export const setProductToStorages = (product: TProduct) => {
  const products = localStorage.getItem("products");
  const productList: TProduct[] = products ? JSON.parse(products) : [];

  productList.push(product);

  localStorage.setItem("products", JSON.stringify(productList)); // Save the updated array
};

export const getProductToStorages = () => {
  const products = localStorage.getItem("products");
  return products ? JSON.parse(products) : [];
};

export const clearProductStorages = () => localStorage.removeItem("products");

export const deleteProductStorages = (product: TProduct) => {
  const products = localStorage.getItem("products");
  const productList: TProduct[] = products ? JSON.parse(products) : [];

  const newData = productList.filter(
    (item: TProduct) => item.index !== product.index
  );

  localStorage.setItem("products", JSON.stringify(newData));
};
