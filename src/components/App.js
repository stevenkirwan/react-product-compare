import React, { Component } from "react";
import axios from "axios";

import Spinner from "./Spinner";
import ProductList from "./ProductList";
import CompareList from "./CompareList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            compare: []
        };
    }

    // Add item to compare panel
    addToCompare = product => {
        // If it's already in the array don't add
        if (this.state.compare.indexOf(product) > -1) {
            return "Already in compare list";
        }

        // Update array with product
        this.setState(prevState => {
            return {
                compare: prevState.compare.concat([product])
            };
        });
    };

    // Remove item from compare panel
    removeFromCompare = product => {
        // Copy array
        const compare = this.state.compare.slice();
        // Remove element
        compare.splice(product, 1);
        // Update state
        this.setState(() => {
            return { compare, error: undefined };
        });
    };

    componentWillMount() {
        const URL =
            "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0101000))?apiKey=FAnOxJyWNKqOjDCsp0Xdwvp6&pageSize=30&format=json";

        axios
            .get(URL)
            .then(response => {
                this.setState(() => {
                    return {
                        data: response.data.products
                    };
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                {this.state.data.length > 0 ? (
                    <ProductList
                        {...this.state}
                        addToCompare={this.addToCompare}
                    />
                ) : (
                    <Spinner />
                )}
                {this.state.compare.length > 0 && (
                    <CompareList
                        products={this.state.compare}
                        removeFromCompare={this.removeFromCompare}
                        getSaving={this.getSaving}
                    />
                )}
            </div>
        );
    }
}

export default App;
