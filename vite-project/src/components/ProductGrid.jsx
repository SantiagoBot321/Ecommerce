import React from 'react'
import productDatabase from '../database/product-database'



const ProductGrid = () => {
  return (
    <section>
      <ul>
      {productDatabase.map((product) => (
        <li key={product.id}>
          <img src={product.img} alt={product.nameProduct} />
          <h3>{product.nameProduct}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>
            Añadir al carrito
          </button>
        </li>
      ))}
      </ul>
    </section>
  );
};

export default ProductGrid