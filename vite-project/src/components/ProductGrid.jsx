import React from 'react'
import productDatabase from './product-database.js'

const ProductGrid = () => {
  return (
    <section id="product-grid">
      <h2>Productos</h2>
      <ul>
        <li>
          <picture>
            <img />
          </picture>
          <h3><span>Nombre del producto</span></h3>
          <h3><span>Precio</span></h3>
          <h3>Añadir al carrito</h3>
        </li>
      </ul>
    </section>
  )
}

const ProductGrid = ({ addToCart }) => {
  return (
    <div>
      {productDatabase.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>
            Añadir al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid