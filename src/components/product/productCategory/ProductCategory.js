import React from "react";
import { Category } from "./ProductCategory.styled";

const ProductCategory = (props) => {
  return <Category>{props.category}</Category>;
};

export default ProductCategory;
