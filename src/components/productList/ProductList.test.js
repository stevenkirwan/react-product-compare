import React from 'react';
import { mount, shallow} from 'enzyme';
import ProductList from './ProductList';
import Product from "../product/Product";

describe('ProductList', () => {
  it('should render ProductList', () => {
    const wrapper = shallow(<ProductList />);  
  });
});