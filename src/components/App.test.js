import React from 'react';
import { shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  it('should render App', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.html());
  });
});