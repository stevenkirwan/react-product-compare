import React from "react";
import PropTypes from 'prop-types';

// components
import Product from "../product/Product";

// styles
import ProductListStyled from "./ProductList.styled";

const ProductList = ({data}) => (
    <ProductListStyled>
        {data && data.map((product, i) => {
            return (
                <Product
                    index={i}
                    key={product.sku}
                    product={product}
                    id={product.sku}                
                />
            );
        })}
    </ProductListStyled>
);

export default ProductList;

ProductList.propTypes = {
    data: PropTypes.array.isRequired
};