import * as actions from './index';
import { DATA_REQUESTED } from '../constants/actionTypes';

describe('actions', () => {
  it('should create an action to get Data', () => {
    const expectedAction = { type: DATA_REQUESTED };
    expect(actions.getData()).toEqual(expectedAction)
  })
});
