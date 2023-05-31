import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <section>
      <h2>Carrito de compras</h2>
      {cartItems && cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <h3>{item.nameProduct}</h3>
                <p>Precio: ${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p>Valor total: ${totalPrice}</p>
        </div>
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