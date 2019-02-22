import React, { Component } from 'react';
import SearchBox from '../../Components/SearchBox/SearchBox';
import './Search.css';

class Search extends Component{
    render(){
        return(
            <div className="buscas">
           <SearchBox /> 
           </div>

        )
    }


}

export default Search;