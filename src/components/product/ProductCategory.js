import React from "react";
import styled from "styled-components";

const Category = styled.div`
    color: #bdc3c7;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

const ProductCategory = props => {
    return <Category>{props.category}</Category>;
};

export default ProductCategory;
