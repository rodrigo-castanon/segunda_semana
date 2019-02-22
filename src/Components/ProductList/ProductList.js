import React from 'react';
import './ProductList.css';

const ProductList = ({products}) => (

  <div className="container">

    {products.map(product =>(
      <div className="product" key={product.id}>
          <header>
            <strong>{product.photo}</strong>
            
          </header>
          <small>{product.name}</small>
          <ul>
            <li>
              {product.price}<small>Album</small>
            </li>
            <li>
              {product.store}<small>Plays</small>
            </li>
            
            
          </ul>
      </div>
    ))}
        
  </div>
)

export default ProductList;