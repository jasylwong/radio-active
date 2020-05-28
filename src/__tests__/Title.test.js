import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Title from '../components/Title.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Title', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the title', () => {
    const wrapper = shallow(<Title content={'Radio-Active'} />);
    expect(wrapper.find('#title').text()).toEqual('Radio-Active');
  });
});
