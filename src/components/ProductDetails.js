import React, {Component} from 'react';
import axios from 'axios';

import Spinner from './Spinner';

class ProductDetails extends Component {

    constructor(props) {

        super(props);
        this.state = (
          {
            data: [],
            images: []
          }
        )
      }

    componentWillMount() {
        const URL = `https://api.bestbuy.com/v1/products(sku=${this.props.match.params.id}&(categoryPath.id=abcat0101000))?apiKey=FAnOxJyWNKqOjDCsp0Xdwvp6&pageSize=30&format=json`;
      
        axios
        .get(URL)
        .then(response => {
          this.setState(() => {
            return{
              data: response.data.products,
              images: [],
              gatimages: function () {
                response.data.products[0].images.map((img) => {
                  img.href.push(this.state.images);
                });
              }
            }
          })
        })
        .catch(error => {
          console.log(error); 
        });
    }

    renderProductList(){
      if(this.state.data.length > 0){
        return (
          this.state.data.map( (product) => {
              return (
                <div className="product-list" key={this.props.match.params.id}>
                  <h1>{product.name}</h1>
                  <p>{product.longDescription}</p>
                  <p><strong>Display Type: </strong>{product.displayType}</p>
                  <p><strong>HDMI inputs: </strong>{product.hdmiInputs}</p>
                  <p><strong>Price: </strong>&euro;{product.regularPrice}</p>
                  <p><strong>Sale price: </strong>&euro;{product.salePrice}</p>
                  <p><strong>Screen size: </strong>{product.screenSizeIn}"</p>
                </div>
              )
          })
        )
      }else{
        return (
          <Spinner />
        )
      } 
    }

    render() { 
      return ( 
        <div>
            {this.renderProductList()}
        </div>
      )
    }
}
 
export default ProductDetails;

