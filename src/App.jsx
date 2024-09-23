import React from 'react';
import Product from './Product';
import Cart from './Cart';
import { useSelector } from 'react-redux';

function App() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div>
      <h1>Product List</h1>
      <Product />
      <h2>Cart Items</h2>
      <Cart items={cartItems} />
    </div>
  );
}

export default App;
