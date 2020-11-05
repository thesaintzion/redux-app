import { takeEvery, call, put } from "redux-saga/effects";
import { GET_POSTS, API_REQUEST, API_ERROR } from '../constants/action-types';


export default function* watcherSaga() {
  yield takeEvery( API_REQUEST, workerSaga);
}

function* workerSaga(){
  try {
    const payload = yield call(getData);
    yield put({ type: GET_POSTS, payload });

  } catch (e) {
    yield put({ type: API_ERROR, payload: e });
  }
}

function getData() {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
      response.json()
    );
  }