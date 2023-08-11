import React from 'react';
import './ProductList.css';

const ProductList = ({ products, addToCart, removeFromCart, cart }) => {
  const getQuantityInCart = productId => {
    const cartItem = cart.find(item => item.product.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className="box">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span  className="text">{product.name}</span>
            <span className="text">{product.price}</span>
            <div className='button_style'>
            <button onClick={() => removeFromCart(product)}>-</button>
            <span className='quantity_count'>{getQuantityInCart(product.id)}</span>
            <button onClick={() => addToCart(product)}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;