import React, { Fragment } from "react";
import { Img } from "./ProductImage.styled";

const ProductImage = (props) => {
  return (
    <Fragment>
      <a href={props.href}>
        <Img
          src={
            props.image == null
              ? `https://via.placeholder.com/220x150`
              : props.image
          }
          alt={props.alt}
        />
      </a>
    </Fragment>
  );
};

export default ProductImage;
