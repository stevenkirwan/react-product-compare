import React from "react";
import { Reviews, Average, Count } from "./ProductReviews.styled";

const ProductReviews = (props) => {
  return (
    <Reviews>
      <Average>
        {props.customerReviewAverage}
        <i className="fa fa-star" aria-hidden="true" />
      </Average>
      <Count>({props.customerReviewCount} Reviews)</Count>
    </Reviews>
  );
};

export default ProductReviews;
