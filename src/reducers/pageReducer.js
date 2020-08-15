import { IMAGES } from '../constants';

const pageReducer = (state = 1, action) => {
    switch (action.type) {
        case IMAGES.LOADING_SUCCESS: //lấy ảnh thành công thì tăng page lên 1 để lấy ảnh ở trang tiếp theo từ api
            return state + 1;

        default:
            return state;
    }
};

export default pageReducer;
