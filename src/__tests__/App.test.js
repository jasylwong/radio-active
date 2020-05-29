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

  it('renders the audio element', () => {
    const component = mount(<App />);
    expect(component.find('#audio').type()).toEqual('audio');
  });

  it('audio starts paused', () => {
    const component = mount(<App />);
    // console.log('component: ', component.find('#audio').paused)
    expect(component.find('#audio').prop('paused')).toBe('true');
    // expect(component.find('#audio').paused).toBe(true);
  });

  // it('pressing play starts playing audio', () => {
  //   const component = mount(<App />);
  //   expect(component.find('#audio').prop('paused')).toBe('true');
  //   component.find('#player').simulate('click');
  //   // expect(component.find('#audio').prop('paused')).toBe('false');
  // });
});
