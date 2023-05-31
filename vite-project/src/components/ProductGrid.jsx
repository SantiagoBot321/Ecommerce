import React, { useEffect, useState, useContext } from 'react';
import CartContext from '../context/CartContext';
import pGrid from '../styles/ProductGrid.module.css';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://6474c4567de100807b1bb4ed.mockapi.io/products'
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log('Error al obtener los productos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={pGrid.section}>
      <h2>Productos</h2>
      <ul className={pGrid.products}>
        {products.map((product) => (
          <li key={product.id} className={pGrid.productCard}>
            <picture className={pGrid.productImgCont}>
              <img src={product.img} alt={product.nameProduct} className={pGrid.productImg} />
            </picture>
            <h3>{product.nameProduct}</h3>
            <p>${product.price}</p>
            <p
              className={pGrid.producCarrito}
              onClick={() => addToCart(product)}
            >
              Añadir al carrito
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductGrid;