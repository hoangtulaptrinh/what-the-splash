import { takeEvery, put, take, call } from 'redux-saga/effects';

import { IMAGES } from '../constants';

function* handleImageLoading() {
    console.log('fetching image from api...');
}

function* testBlocking() {
    console.log('test block king');
}

//theo dõi saga
function* rootSaga() {
    // yield take('block'); // thằng chọi con này do không được gọi nên sẽ block toàn bộ thằng bên dưới

    // dùng takeEvery là cơ chế non-blocking tức là takeEvery sẽ không block thằng bên dưới nhưng vẫn bị thằng ở trên block như thường
    // nhớ thêm  yield nếu không hàm ở tham số thứ 2 (handleImageLoading) sẽ không chạy
    yield takeEvery('IMAGES_LOADING', handleImageLoading); // theo dõi khi dispatch action IMAGES_LOADING thì chạy hàm handleImageLoading

    // dùng combo take + call là cơ chế blocking tức là sẽ block thằng bên dưới và bị thằng ở trên block như thường
    yield take('test'); // tạm dừng cho đến khi action test được gọi
    yield call(testBlocking); // Gọi function testBlocking, Nếu nó return về một promise, tạm dừng saga cho đến khi promise được giải quyết
}

//theo dõi saga => action => worker saga

export default rootSaga;

// Fork(): sử dụng cơ chế non - blocking call trên function (non-block)
// Call(): Gọi function. Nếu nó return về một promise, tạm dừng saga cho đến khi promise được giải quyết (block - g)
// Take(): tạm dừng cho đến khi nhận được action (block)
// Put(): Dùng để dispatch một action
// takeEvery(): Theo dõi một action nào đó thay đổi thì gọi một saga nào đó
// takeLastest() : Có nghĩa là nếu chúng ta thực hiện một loạt các actions, nó sẽ chỉ thực thi và trả lại kết quả của của actions cuối cùng
// yield(): Có nghĩa là chạy tuần tự khi nào trả ra kết quả mới thực thi tiếp
// Select(): Chạy một selector function để lấy data từ state
