import { takeEvery, call, put } from "redux-saga/effects";
import { GET_POSTS, API_REQUEST, API_ERROR } from '../constants/action-types';


export default function* watcherSaga() {
  yield takeEvery( API_REQUEST, workerSaga);
}

function* workerSaga(action){
  try {
    const payload = yield call(getData, action.payload.url);
    yield put({ type: GET_POSTS, payload });

  } catch (e) {
    console.log('Error here in SAGA', e);
    yield put({ type: API_ERROR, payload: e });
  }
}

function getData(url) {
    return fetch(url).then(response =>
      response.json()
    );
  }