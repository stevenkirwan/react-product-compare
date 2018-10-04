import React from "react";
import styled from "styled-components";

const Reviews = styled.div`
    display: flex;
    float: left;
    font-size: 12px;
    margin-top: 10px;
`;

const Average = styled.div`
    background: #f1c40f;
    color: #ffffff;
    margin-right: 10px;
    padding: 4px 8px;

    i {
        margin-left: 5px;
    }
`;

const Count = styled.div`
    margin-top: 8px;
`;

const ProductReviews = props => {
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
