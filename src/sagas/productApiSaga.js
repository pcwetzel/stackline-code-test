import { takeEvery, call, put } from 'redux-saga/effects';
import { DATA_LOADED, DATA_ERROR } from '../constants/actionTypes';

export default function* watcherSaga() {
  yield takeEvery('DATA_REQUESTED', workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: DATA_LOADED, payload });
  } catch (e) {
    yield put({ type: DATA_ERROR, payload: e });
  }
}

async function getData() {
  const response = await fetch('data/Webdev_data2.json');
  return await response.json();
}
