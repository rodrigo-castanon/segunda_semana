import React from 'react';
import './ProductList.css';

const ProductList = ({products}) => (

  <div className="container">

    {products.map(product =>(
      <div className="product" key={product.id}>
          <header>
            <strong>{product.name}</strong>
          
          </header>
          
          <ul>
            <li>
            <a>preço:</a><h4>{product.price}</h4>
            </li>
            <li>
            <a>Vendido por: </a>{product.store}
            </li>
            
            
          </ul>
      </div>
    ))}
        
  </div>
)

export default ProductList;