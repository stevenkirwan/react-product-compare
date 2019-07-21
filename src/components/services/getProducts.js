import axios from 'axios';

// get products API call
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        const URL =
        "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0101000))?apiKey=FAnOxJyWNKqOjDCsp0Xdwvp6&pageSize=30&format=json";
    axios
        .get(URL)
        .then(response => {
            resolve(response.data.products);
        })
        .catch(reject);
    });
};