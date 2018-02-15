import React, { Component } from 'react';
import axios from 'axios';

import Spinner from './Spinner';
import ProductList from './ProductList';
import CompareList from './CompareList';

class App extends Component {

  constructor(props) {

    super(props);
    this.state = (
      {
        data: [],
        compare: []
      }
    )
    this.addToCompare = this.addToCompare.bind(this);
    this.removeFromCompare = this.removeFromCompare.bind(this);
    this.getSaving = this.getSaving.bind(this);
  }

  // Add item to compare panel 
  addToCompare(product){  
    // If it's already in the array don't add
    if(this.state.compare.indexOf(product) > -1){
      return 'Already in compare list'
    }

    // Update array with product
    this.setState((prevState) => {
      return{
        compare: prevState.compare.concat([product])
      }
    })
  }

  // Remove item from compare panel
  removeFromCompare(product){
    // Copy array
    const compare = this.state.compare.slice();
    // Remove element
    compare.splice(product, 1);
    // Update state
    this.setState(() => {
      return{ compare }
    })
  }

  componentWillMount() {
    const URL = 'https://api.bestbuy.com/v1/products((categoryPath.id=abcat0101000))?apiKey=FAnOxJyWNKqOjDCsp0Xdwvp6&pageSize=30&format=json';

    axios
    .get(URL)
    .then(response => {
      this.setState(() => {
        return{
          data: response.data.products
        }
      })
    })
    .catch(error => {
      console.log(error); 
    });
  }

  getSaving(regularPrice, salePrice){
    const cashSaving = Math.round(((regularPrice - salePrice) / regularPrice) * 100);
    return cashSaving;
  }
  
  renderProductList(){
      if(this.state.data.length > 0){
        return (
          <ProductList 
            {...this.state} 
            addToCompare={this.addToCompare}
            getSaving={this.getSaving}
          />
        )
      }else{
        return (
          <Spinner />
        )
      }
    
  }

  renderCompareList(){
    if(this.state.compare.length > 0){
      return (
        <CompareList 
          products={this.state.compare} 
          removeFromCompare={this.removeFromCompare}
          getSaving={this.getSaving}
        />
      )
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderProductList()}
        {this.renderCompareList()}
      </div>
    );
  }
}

export default App;
