import React from 'react';
import productDatabase from '../database/product-database';
import pGrid from '../styles/ProductGrid.module.css';


const ProductGrid = () => {
  return (
    <section className={pGrid.section}>
      <h2>Productos</h2>
      <ul className={pGrid.products}>
      {productDatabase.map((product) => (
        <li key={product.id} className={pGrid.productCard}>
          <picture className={pGrid.productImgCont}>
            <img src={product.img} alt={product.nameProduct} className={pGrid.productImg} />
          </picture>
          <h3>{product.nameProduct}</h3>
          <p>${product.price}</p>
          <p className={pGrid.producCarrito} onClick={() => addToCart(product)}>
            Añadir al carrito
          </p>
        </li>
      ))}
      </ul>
    </section>
  );
};

export default ProductGrid