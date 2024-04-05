import { categories, reviews } from "../db";

export const Product = {
  category: (parent: any) =>
    categories.find((category) => category.id === parent.categoryId),
  reviews: (parent: any, args: any, context: any) =>
    reviews.filter((review) => review.productId === parent.id),
};
