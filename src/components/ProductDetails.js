import React, { useEffect, useState } from "react";
import axios from "axios";

import Spinner from "./Spinner";

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const URL = `https://api.bestbuy.com/v1/products(sku=${match.params.id}&(categoryPath.id=abcat0101000))?apiKey=FAnOxJyWNKqOjDCsp0Xdwvp6&pageSize=30&format=json`;
    console.log(product.length);
    axios
      .get(URL)
      .then((response) => {
        setProduct(response.data.products[0]);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return loader ? (
    <Spinner />
  ) : (
    <div className="product-list">
      <h1>{product.name}</h1>
      <p>{product.longDescription}</p>
      <p>
        <strong>Display Type: </strong>
        {product.displayType}
      </p>
      <p>
        <strong>HDMI inputs: </strong>
        {product.hdmiInputs}
      </p>
      <p>
        <strong>Price: </strong>&euro;{product.regularPrice}
      </p>
      <p>
        <strong>Sale price: </strong>&euro;{product.salePrice}
      </p>
      <p>
        <strong>Screen size: </strong>
        {product.screenSizeIn}"
      </p>
    </div>
  );
};

export default ProductDetails;
