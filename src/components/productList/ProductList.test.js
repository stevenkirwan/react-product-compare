import React from 'react';
import { mount, shallow} from 'enzyme';
import ProductList from './ProductList';
import Product from "../product/Product";

describe('ProductList', () => {
  it('should render ProductList', () => {
      const data = [
          {
              manufacturer:"Samsung", 
              sku:"123", 
              regularPrice: 5745.98,
              salePrice:5745.98,
              largeImage: "https://img.bbystatic.com/BestBuy_US/images/products/4617/4617200_sb.jpg",
              customerReviewAverage:5
            }
        ];
    const wrapper = shallow(<ProductList data={data} />);
    expect(wrapper.find(Product)).toHaveLength(1);
  });
});