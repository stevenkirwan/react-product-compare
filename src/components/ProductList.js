import React from 'react';

import Product from './Product';

const ProductList = (props) => {
    return ( 
        <div className="product-list">
            {props.data.map( (product) => {
                let addToCompare = props.addToCompare.bind(this, product);
                return <Product key={product.sku} product={product} id={product.sku} addToCompare={addToCompare} getSaving={props.getSaving}/>
            })}
        </div>
    )
}
 
export default ProductList;