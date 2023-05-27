import React from 'react';
import productDatabase from '../database/product-database';
import pGrid from '../styles/ProductGrid.module.css';


const ProductGrid = () => {
  return (
    <section className={pGrid.section}>
      <ul className={pGrid.products}>
      {productDatabase.map((product) => (
        <li key={product.id}>
          <img src={product.img} alt={product.nameProduct} />
          <h3>{product.nameProduct}</h3>
          <p>${product.price}</p>
          <p onClick={() => addToCart(product)}>
            Añadir al carrito
          </p>
        </li>
      ))}
      </ul>
    </section>
  );
};

export default ProductGrid