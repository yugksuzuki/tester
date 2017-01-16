import React from 'react';
import { BrowserRouter } from 'react-router';
import renderer from 'react-test-renderer';
import OrderPage from './OrderPage';

describe('OrderPage', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <OrderPage />
      </BrowserRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});