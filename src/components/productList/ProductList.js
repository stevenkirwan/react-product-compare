import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

// services
import { getProducts } from "../services/getProducts";

// components
import Product from "../product/Product";
import Spinner from "../Spinner";

// styles
import ProductListStyled from "./ProductList.styled";
const pageSize = 30;
const ProductList = () => {
  // hook to handle getting and setting products
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  // get products
  useEffect(() => {
    getProducts(pageSize, page)
      .then((data) => {
        setTotalPages(data.totalPages);
        setProducts(data.products);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const fetchData = () => {
    setPage(page + 1);
    getProducts(pageSize, page + 1)
      .then((data) => {
        const newProducts = [...products, ...data.products];
        setProducts(newProducts);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return products.length > 0 ? (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchData}
      hasMore={page < totalPages}
      loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>No more products</b>
        </p>
      }
    >
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
    </InfiniteScroll>
  ) : (
    <Spinner />
  );
};

export default ProductList;
