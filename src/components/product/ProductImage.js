import React, { Fragment } from "react";
import styled from "styled-components";

const Img = styled.img`
    display: block;
    height: auto;
    margin: 0 auto 20px auto;
    width: 100%;
`;

const ProductImage = props => {
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
