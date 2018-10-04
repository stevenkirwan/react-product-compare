import React from "react";
import styled from "styled-components";

import Product from "./product/Product";

const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 100px auto 100px auto;
    max-width: 1500px;
`;

export default props => (
    <ProductList>
        {props.data.map((product, i) => {
            let addToCompare = props.addToCompare.bind(this, product);
            return (
                <Product
                    index={i}
                    key={product.sku}
                    product={product}
                    id={product.sku}
                    addToCompare={addToCompare}
                    getSaving={props.getSaving}
                />
            );
        })}
    </ProductList>
);
