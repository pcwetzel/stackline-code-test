import { DATA_LOADED, BAD_DATA_FOUND } from '../constants/actionTypes';
import isValidDate from '../utils/dataValidator';

export function badDataMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === DATA_LOADED) {
        if (action.payload?.[0]?.sales && action.payload[0].sales.filter(entry => !isValidDate(entry?.weekEnding)).length) {
          return dispatch({ type: BAD_DATA_FOUND });
        }
      }
      return next(action);
    };
  };
}