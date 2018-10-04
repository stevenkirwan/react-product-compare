import React, { Component } from "react";
import styled from "styled-components";

import ProductImage from "./ProductImage";
import ProductCategory from "./ProductCategory";
import ProductTitle from "./ProductTitle";
import ProductReviews from "./ProductReviews";
import ProductPrice from "./ProductPrice";
import ProductSaving from "./ProductSaving";

const ProductWrapper = styled.div`
    background: #ffffff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    flex-grow: 1;
    padding: 20px 20px 10px 20px;
    margin: 10px;
    width: 15%;
    position: relative;
`;

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined,
            opacity: 0
        };
    }

    componentDidMount() {
        this.handleTransition();
    }

    handleTransition = () =>
        setTimeout(() => this.setState({ opacity: 1 }), 100);

    addToCompare = product => {
        const error = this.props.addToCompare(product);

        this.setState(() => {
            return { error };
        });
    };

    render() {
        const { product } = this.props;
        return (
            <ProductWrapper style={{opacity: this.state.opacity, transition: "opacity 3s ease"}}>
                <ProductSaving
                    regularPrice={product.regularPrice}
                    salePrice={product.salePrice}
                />
                <ProductImage
                    image={product.largeImage}
                    alt={product.manufacturer}
                    href={product.sku}
                />
                <ProductCategory category={product.productTemplate} />
                <ProductTitle manufacturer={product.manufacturer} />
                <ProductReviews
                    customerReviewAverage={product.customerReviewAverage}
                    customerReviewCount={product.customerReviewCount}
                />
                <ProductPrice
                    salePrice={product.salePrice}
                    regularPrice={product.regularPrice}
                />
                <button className="compare-btn" onClick={this.addToCompare}>
                    Compare
                </button>
                <br />
                {this.state.error && <p>{this.state.error}</p>}
            </ProductWrapper>
        );
    }
}
