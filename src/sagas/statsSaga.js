import { take, fork, put, call } from 'redux-saga/effects';

import { fetchImagesStats } from '../api';
import { IMAGES } from '../constants';
import { loadImagesStats, setImageStats, setImageStatsError } from '../actions';

function* handleStatsRequest(id) {
    try {
        yield put(loadImagesStats(id)); // hiện loading
        const response = yield call(fetchImagesStats, id); // lấy ra kết quả gọi từ api
        yield put(setImageStats(id, response.downloads.total)); // chuyển kết quả này vào state để hiện ra view
        return;
    } catch (err) {
        yield put(setImageStatsError(id));
    }
}

export default function* watchStatsRequest() {
    while (true) {
        const { images } = yield take(IMAGES.LOADING_SUCCESS); // đợi cho đến khi action IMAGES.LOADING_SUCCESS được call thì lấy data images ra để thao tác

        // images.forEach(image=>{
        //   yield fork(handleStatsRequest,image.id) //báo lỗi yield is reserved word (tạm thời chưa hiểu) dùng
        // })

        //for thì ok
        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatsRequest, images[i].id); // Fork(): sử dụng cơ chế non - blocking call trên function tức là chạy song song không ch
        }
    }
}
