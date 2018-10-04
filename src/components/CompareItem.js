import React from 'react';

// helpers
import { getSaving } from "./helpers/";

export default (props) => ( 
    <div className="compare-item">
        <div><img src={props.product.thumbnailImage} alt={props.product.manufacturer} /></div>
        <div className="compare-item__title">{props.product.manufacturer}</div>
        <div className="compare-item__regularPrice"><strong>Regular price:</strong> &euro;{props.product.regularPrice}</div>
        <div><strong>Sale Price:</strong> &euro;{props.product.salePrice}</div>
        <div><strong>Saving:</strong> {getSaving(props.product.regularPrice, props.product.salePrice)}%</div>
        <div><button onClick={props.removeFromCompare}>Remove</button></div>
    </div>
)