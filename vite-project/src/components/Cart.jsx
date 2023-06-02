import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import styles from '../styles/Cart.module.css'
import PageContext from "../context/PageContext";

const Cart = () => {
  const { change } = useContext(PageContext);
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
    <section className={styles.sectCart}>
      <h2>Carrito de compras</h2>
      {cartItems && cartItems.length > 0 ? (
        <ul className={styles.contCart}>
          {uniqueCartItems.map((item) => (
            <li key={item.id} className={styles.contproducto}>
              <ul className={styles.contImg}>
                <li className={styles}>
                  <picture>
                  <img src={item.img} alt='Imagen producto'className={styles.productoImg}/>
                  </picture>
                </li>
              </ul>
              <ul className={styles.contName}>
                <li>
                <h3>{item.nameProduct}</h3>
                <p>${item.price}</p>
                </li>
              </ul>
              <ul className={styles.contCant}>
                <li>
                <p onClick={() => decreaseQuantity(item.id)} className={styles.botonCart}>-</p>
                </li>
                <li>
                <p className={styles.contCantNum}>{item.quantity}</p>
                </li>
                <li>
                <p onClick={() => increaseQuantity(item.id)} className={styles.botonCart}>+</p>
                </li>
              </ul>
              <ul className={styles.contElim}>
                <li>
                <p onClick={() => removeFromCart(item.id)}  className={styles.botonCart}>Eliminar</p>
                </li>
              </ul>
            </li>
          ))}
          <ul className={styles.Vtotal}>
            <li>
              <p className={styles.total}>Valor total: ${totalPrice.toFixed(3)}</p> 
            </li>
            <li>
            {cartItems && cartItems.length > 0 && (
              <p onClick={clearCart} className={styles.Vaciar}>
                <span className="fa-regular fa-trash-can fa-lg"></span>
              </p>
      )}
            </li>
          
          </ul>
          <ul className={styles.contPay}>
          <li>
            <p>
              Pagar
            </p>
          </li>
          <li>
            <p onClick={() => change(null)}>Eligir más productos</p>
          </li>
          </ul>
        </ul>
      ) : (
        <ul className={styles.empty}>
          <li>
            <p>No hay productos en el carrito.</p>
          </li>
          <li>
            <p>
              Selecciona algún producto para proceder con la compra.
            </p>
          </li>

        </ul>
      )}
    </section>
  );
};

export default Cart;