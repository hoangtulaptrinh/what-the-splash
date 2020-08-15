import { takeEvery, select, call, put } from 'redux-saga/effects';

import { IMAGES } from '../constants';
import { fetchImages } from '../api';
import { setIMAGES, setError } from '../actions';

const getPage = state => state.nextPage;

function* handleImageLoading() {
    try {
        const page = yield select(getPage); // Select(): Chạy một selector function để lấy data từ state
        const images = yield call(fetchImages, page); // Call(): Gọi function. Nếu nó return về một promise, tạm dừng saga cho đến khi promise được giải quyết
        yield put(setIMAGES(images)); //dispatch images
    } catch (error) {
        yield put(setError(error.toString())); //dispatch images  //dispatch error
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOADING, handleImageLoading);
}
