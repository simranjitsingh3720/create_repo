import React from 'react';
import './ProductList.css';

const ProductList = ({ products, addToCart, removeFromCart, cart }) => {

  console.log("products", products);

  console.log("cart", cart);

  return (
    <div className="box">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span style={{color: 'white'}}>{product.name}</span>
            <span style={{color: 'white'}}>{product.price}</span>
            <div>
            <button onClick={() => removeFromCart(product)}>-</button>
            <button onClick={() => addToCart(product)}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;