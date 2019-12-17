import rootReducer from './index';
import { DATA_LOADED } from '../constants/actionTypes';

const initialState = {
  products: []
};

describe('root reducer test', () => {
  it('should return the initial state of the reducer', () => {
    expect(rootReducer(undefined, {})).toEqual(initialState)
  });

  it('should be able to handle blanked out data', () => {
    expect(
      rootReducer(undefined, {
        type: DATA_LOADED,
        payload: {}
      })
    ).toEqual({"products": [{}]});
  });

  it('should be able to handle no products', () => {
    expect(
      rootReducer(undefined, {
        type: DATA_LOADED,
        payload: [{}]
      })
    ).toEqual({
      'products': [
        {}
      ]
    });
  });

  it('should be able to handle valid product data', () => {
    expect(
      rootReducer(undefined, {
        type: DATA_LOADED,
        payload: [
          {
            id: 'foo',
            title: 'bar',
            subtitle: 'Lorem Ipsum',
            tags: [],
            sales: []
          }
        ]
      })
    ).toEqual({
      'products': [
        {
          id: 'foo',
          title: 'bar',
          subtitle: 'Lorem Ipsum',
          tags: [],
          sales: []
        }
      ]
    });
  });

});
