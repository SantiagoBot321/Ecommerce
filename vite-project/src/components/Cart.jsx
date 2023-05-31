import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const productCounts = {};
  cartItems.forEach(item => {
    if (productCounts[item.id]) {
      productCounts[item.id]++;
    } else {
      productCounts[item.id] = 1;
    }
  });

  const uniqueCartItems = [];
  let totalPrice = 0;

  cartItems.forEach(item => {
    if (!uniqueCartItems.find(uniqueItem => uniqueItem.id === item.id)) {
      uniqueCartItems.push(item);
      totalPrice += item.price * productCounts[item.id];
    }
  });

  return (
    <section>
      <h2>Carrito de compras</h2>
      {cartItems && cartItems.length > 0 ? (
        <ul>
          <ul>
            {uniqueCartItems.map((item) => (
              <li key={item.id}>
                <h3>{item.nameProduct}</h3>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {productCounts[item.id]}</p>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p>Valor total: ${totalPrice}</p>
        </ul>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
      {cartItems && cartItems.length > 0 && (
        <button onClick={clearCart}>Vaciar carrito</button>
      )}
    </section>
  );
};

export default Cart;