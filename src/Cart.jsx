import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from './Slicers'; // Ensure you have a removeItem action
import './Cart.css';

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart) || [];
  const total = items.reduce((acc, value) => acc + value.price, 0);

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item)); // Dispatch action to remove the item
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map((item, index) => (
          <div className="cart-item" key={index}>
            <h3>Item: {item.name}</h3>
            <p>Price: ${item.price}</p>
           
              <p><img className="cart-item-image" src={item.img} alt={item.name} /></p>
           
           
            <button onClick={() => handleRemoveItem(item)}>Remove</button>
          </div>
        ))
      )}
      <h4>Total: ${total}</h4>
    </div>
  );
}
