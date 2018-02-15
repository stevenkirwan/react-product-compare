import React, { Component } from 'react';

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined
        }

        this.addToCompare = this.addToCompare.bind(this);
    }

    addToCompare(product) {
        const error = this.props.addToCompare(product);

        this.setState(() => {
            return{ error }
        });
    }

    renderPrice(product){
        if(product.salePrice === product.regularPrice){
            return(
                <div className="product-item__regularPrice">&euro;{product.regularPrice}</div>
            )
        }else{
            return(
                <div>
                    <div className="product-item__regularPrice_sale">&euro;{product.regularPrice}</div>
                    <div className="product-item__regularPrice">&euro;{product.salePrice}</div>
                </div>
            )
        }
    }

    renderSaving(regularPrice, salePrice, product){
        const saving = this.props.getSaving(regularPrice, salePrice);
        if(saving !== 0){
            return (
                <div className="product-item__saving">save up to {this.props.getSaving(regularPrice, salePrice)}%</div>
            )
        }        
    }

    render() {
        const { product } = this.props; 
        return ( 
            <div className="product-item">
                {this.renderSaving(product.regularPrice, product.salePrice, product)}
                <img src={product.largeImage} alt={product.manufacturer} />
                <div className="product-item__category">{product.productTemplate}</div>
                <div className="product-item__title">{product.manufacturer}</div>
                <div className="product-item__reviews">
                    <div className="product-item__reviewAverage">{product.customerReviewAverage}<i className="fa fa-star" aria-hidden="true"></i></div>
                    <div className="product-item__ReviewCount"><a href="#">({product.customerReviewCount} Reviews)</a></div>
                </div>
                {this.renderPrice(product)}
                <button className="compare-btn" onClick={this.addToCompare}>Compare</button>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        )
    }
}