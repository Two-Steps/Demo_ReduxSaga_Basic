import { put, takeEvery, all, call } from 'redux-saga/effects';



const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* incrementAsync() {
    yield call(delay, 2000);
    yield put({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
    yield all([call(helloSage), call(watchIncrementAsync)])
}


export function* helloSage() {
    console.log('hello world');
}