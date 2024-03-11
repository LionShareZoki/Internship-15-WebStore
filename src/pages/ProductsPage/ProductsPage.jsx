import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import styles from "./ProductsPage.module.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const searchQueryStr = searchQuery ? searchQuery.toLowerCase() : "";
        const filteredProducts = data.filter((product) =>
          product.title.toLowerCase().includes(searchQueryStr)
        );
        setProducts(filteredProducts);
      });
  }, [searchQuery]);

  return (
    <div className={styles.productsContainer}>
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => handleProductClick(product.id)}
          className={styles.productCard}
        >
          <img
            src={product.image}
            alt={product.title}
            className={styles.productImage}
          />
          <h2 className={styles.productTitle}>{product.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
