import React from "react";
import { Saving } from "./ProductSaving.styled";

// helpers
import { getSaving } from "../../helpers";

const ProductSaving = (props) => {
  return (
    getSaving(props.regularPrice, props.salePrice) !== 0 && (
      <Saving>
        save up to {getSaving(props.regularPrice, props.salePrice)}%
      </Saving>
    )
  );
};

export default ProductSaving;
