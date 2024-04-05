import { products } from "../db";

export const Category = {
  products: (parent: any) =>
    products.filter((product) => product.categoryId === parent.id),
};
