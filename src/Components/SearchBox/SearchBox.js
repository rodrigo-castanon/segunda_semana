import React, {Component } from 'react';
import './SearchBox.css';
import ProductList from '../ProductList/ProductList';
import api from '../../services/api';


export default class SearchBox extends Component{
    state = {
        productInput:'',
        products:[],
      };

      handleAddProduct = async (event) => {
        event.preventDefault();
  
        try{
          const response = await api.get(`/produtos/?q=${this.state.productInput}`);
  
          console.log(response);
          
          this.setState({
            productInput:'',
            products: [...this.state.products, response.data],
          })
  
        }catch (err){
          console.log(err);
        }
    };

    render(){
        return(
            <div className="fundo">
            <form className="form" onSubmit={this.handleAddProduct}>
            <input 
            type="text"
            placeholder='Pesquisa de Produtos'
            className="input"
            value = {this.state.productInput}
            onChange={event => this.setState({productInput: event.target.value})}            
              />
          </form>
          {this.state.products.map(product =>(<ProductList products={product} />
          )
          )
          }
          
          </div>

        )
    }
}

