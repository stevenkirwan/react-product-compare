import React from 'react';

import CompareItem from './CompareItem';

export default (props) => ( 
    <div className="compare">
        <div className="compare-wrapper">
            {props.products.map( (product) => {
                let removeFromCompare = props.removeFromCompare.bind(this, product);
                return <CompareItem key={product.sku} product={product} removeFromCompare={removeFromCompare} getSaving={props.getSaving}/>
            })}
        </div>
    </div>
);