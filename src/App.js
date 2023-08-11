import React, { useState } from 'react';
import ProductList from './ProductList/ProductList';
import Cart from './Cart/Cart';
import './App.css';

const Products = [
  { id: 1, name: 'Product-1', price: 100 },
  { id: 2, name: 'Product-2', price: 200 },
  { id: 3, name: 'Product-3', price: 300 },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      if (existingItem.quantity === 1) {
        const updatedCart = cart.filter((item) => item.product.id !== product.id);
        setCart(updatedCart);
      } else {
        const updatedCart = cart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCart(updatedCart);
      }
    }
  };

  return (
    <div  className='container'>
      <ProductList products={Products} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart}/>
      <Cart cart={cart} />
    </div>
  );
};

export default App;