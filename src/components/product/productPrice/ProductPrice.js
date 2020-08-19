import React, { Fragment } from "react";
import { SalePrice, RegularPrice } from "./ProductPrice.styled";

const ProductPrice = (props) => {
  return (
    <Fragment>
      {props.salePrice !== props.regularPrice && (
        <SalePrice>
          &euro;
          {props.regularPrice}
        </SalePrice>
      )}
      <RegularPrice>
        &euro;
        {props.salePrice === props.regularPrice
          ? props.regularPrice
          : props.salePrice}
      </RegularPrice>
    </Fragment>
  );
};

export default ProductPrice;
