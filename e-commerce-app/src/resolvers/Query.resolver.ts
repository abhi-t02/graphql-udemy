import { categories, products, reviews } from "../db";

export const Query = {
  hello: (parent: any, args: any, contextValue: any) => {
    contextValue.sayHello();
    return ["Hello", "World."];
  },
  products: (parent: any, args: any) => {
    let filteredProduct = products;

    if (args.filter) {
      const { onSale, avgRating } = args.filter;

      if (onSale) {
        filteredProduct = products.filter((product) => product.onSale);
      }

      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProduct = filteredProduct.filter((product) => {
          let sumRating = 0;
          let numOfReviews = 0;

          reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numOfReviews++;
            }
          });
          return sumRating / numOfReviews >= avgRating;
        });
      }
    }

    return filteredProduct;
  },
  product: (_: any, args: { id: string }) =>
    products.find((value) => value.id == args.id),
  categories: () => categories,
  category: (_: any, args: { id: string }) =>
    categories.find((category) => category.id === args.id),
};
