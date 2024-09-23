import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './Slicers'; // Adjust the path to your slice
import productsData from './productsData.json'; // Ensure the path is correct
import './Cart.css'; // Import your CSS file
import './Product.css'; // Import your CSS file

function Product() {
  const dispatch = useDispatch();

  return (
    <div className="product-container">
      {productsData.map((item) => (
        <div className="product-card" key={item.name}> {/* Use a unique key */}
          <h3>Name: {item.name}</h3>
          <p>Price: ${item.price}</p>
          {item.img && <img className="product-image" src={item.img} alt={item.name} />}
          <button className="product-button" onClick={() => dispatch(addItem(item))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Product;
