import { put, call, takeLatest } from 'redux-saga/effects';

import { fetchHarems } from '../api';
import { HAREMS } from '../constants';
import { setHarems, setHaremsError } from '../actions';

function* handleFetchHaremsRequest() {
    try {
        const response = yield call(fetchHarems);
        if (response.status >= 200 && response.status < 300) {
            const data = yield response.json();

            yield put(setHarems(data));
        } else {
            throw response;
        }
    } catch (err) {
        yield put(setHaremsError(err));
    }
}

export default function* watchHaremsRequest() {
    yield takeLatest(HAREMS.LOADING, handleFetchHaremsRequest);
}
