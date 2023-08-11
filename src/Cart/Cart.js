import React from 'react';
import './Cart.css';


const Cart = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.quantity * item.product.price, 0);

  return (
    <div className="box">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No Product added to the cart</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.product.id}>
              <span style={{color: 'white'}}>{item.product.name}</span>
              <span style={{color: 'white'}}>{item.quantity} *{item.product.price}</span>
               
            </li>
          ))}
          <p className='totalPrice'>Total Price: {total}</p>
        </ul>
      )}
    </div>
  );
};

export default Cart;
