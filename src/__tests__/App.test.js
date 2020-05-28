import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders correctly', () => {
    const component = mount(<App />);
    expect(component).toMatchSnapshot();
  });
});
