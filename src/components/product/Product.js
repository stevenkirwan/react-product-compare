import React from "react";

import ProductImage from "./productImage/ProductImage";
import ProductCategory from "./productCategory/ProductCategory";
import ProductTitle from "./ProductTitle/ProductTitle";
import ProductReviews from "./productReviews/ProductReviews";
import ProductPrice from "./productPrice/ProductPrice";
import ProductSaving from "./productSaving/ProductSaving";

import { ProductWrapper } from "./Product.styled";

const Product = ({ product }) => {
  return (
    <ProductWrapper>
      <ProductSaving
        regularPrice={product.regularPrice}
        salePrice={product.salePrice}
      />
      <ProductImage
        image={product.largeImage}
        alt={product.manufacturer}
        href={product.sku}
      />
      <ProductCategory category={product.productTemplate} />
      <ProductTitle manufacturer={product.manufacturer} />
      <ProductReviews
        customerReviewAverage={product.customerReviewAverage}
        customerReviewCount={product.customerReviewCount}
      />
      <ProductPrice
        salePrice={product.salePrice}
        regularPrice={product.regularPrice}
      />
    </ProductWrapper>
  );
};

export default Product;
