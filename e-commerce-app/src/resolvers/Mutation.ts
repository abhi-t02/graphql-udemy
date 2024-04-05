import { v4 as uuid } from "uuid";

export const Mutation = {
  addCategory: (
    parent: any,
    args: any,
    { categories }: { categories: any }
  ) => {
    const newCategory = {
      id: uuid(),
      name: args.input.name,
    };

    categories.push(newCategory);

    return newCategory;
  },
  addProduct: (parent: any, args: any, { products }: { products: any }) => {
    const { name, description, quantity, price, image, onSale, categoryId } =
      args.input;

    const newProduct = {
      id: uuid(),
      name,
      description,
      quantity,
      price,
      image,
      onSale,
      categoryId,
    };

    products.push(newProduct);

    return newProduct;
  },

  addReview: (parent: any, args: any, { reviews }: { reviews: any }) => {
    const { title, date, comment, rating, productId } = args.input;

    const newReview = {
      id: uuid(),
      title,
      date,
      comment,
      rating,
      productId,
    };

    reviews.push(newReview);

    return newReview;
  },
  deleteCategory: (
    parent: any,
    args: any,
    { categories }: { categories: any[] }
  ) => {
    const index = categories.findIndex((category) => category.id === args.id);

    if (index === -1) return false;

    categories.splice(index, 1);

    return true;
  },
};
