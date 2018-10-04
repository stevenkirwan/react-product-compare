import React, { Fragment } from "react";
import styled from "styled-components";

const SalePrice = styled.div`
    color: #666666;
    float: right;
    font-size: 14px;
    font-weight: bold;
    margin-top: 13px;
    text-decoration: line-through;
`;

const RegularPrice = styled.div`
    float: right;
    font-size: 18px;
    font-weight: bold;
    margin-top: 13px;
`;

const ProductPrice = props => {
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
