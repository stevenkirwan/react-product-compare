import React from "react";
import styled from "styled-components";

// helpers
import { getSaving } from "../helpers/";

const Saving = styled.div`
    background: #f03434;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    color: #ffffff;
    left: 0px;
    font-size: 14px;
    font-weight: bold;
    padding: 5px 8px;
    position: absolute;
`;

const ProductSaving = props => {
    return (
        getSaving(props.regularPrice, props.salePrice) !== 0 && (
            <Saving>
                save up to {getSaving(props.regularPrice, props.salePrice)}%
            </Saving>
        )
    );
};

export default ProductSaving;
