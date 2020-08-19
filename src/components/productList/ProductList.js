import React, { useState, useEffect } from "react";

// services
import { getProducts } from "../services/getProducts";

// components
import Product from "../product/Product";
import Spinner from "../Spinner";

// styles
import ProductListStyled from "./ProductList.styled";

const ProductList = () => {
  // hook to handle getting and setting products
  const [products, setProducts] = useState([]);

  // get products
  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return products.length > 0 ? (
    <ProductListStyled>
      {products.map((product, i) => {
        return (
          <Product
            index={i}
            key={product.sku}
            product={product}
            id={product.sku}
          />
        );
      })}
    </ProductListStyled>
  ) : (
    <Spinner />
  );
};

export default ProductList;
