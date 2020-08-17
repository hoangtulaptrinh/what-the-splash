import { all } from 'redux-saga/effects';

import imagesSaga from './imagesSaga';
import statsSaga from './statsSaga';
import haremsSaga from './haremSaga';

export default function* rootSaga() {
    yield all([imagesSaga(), statsSaga(), haremsSaga()]);
}
