import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const uniqueCartItems = [];
  let totalPrice = 0;

  cartItems.forEach(item => {
    const existingItem = uniqueCartItems.find(uniqueItem => uniqueItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      uniqueCartItems.push({ ...item });
    }
    totalPrice += item.price * item.quantity;
  });

  return (
    <section>
      <h2>Carrito de compras</h2>
      {cartItems && cartItems.length > 0 ? (
        <ul>
          {uniqueCartItems.map((item) => (
            <li key={item.id}>
              <h3>{item.nameProduct}</h3>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
      {cartItems && cartItems.length > 0 && (
        <button onClick={clearCart}>Vaciar carrito</button>
      )}
      <p>Valor total: ${totalPrice.toFixed(3)}</p> 
    </section>
  );
};

export default Cart;