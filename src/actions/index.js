import { DATA_REQUESTED } from '../constants/actionTypes';

export function getData() {
  return { type: DATA_REQUESTED };
}
