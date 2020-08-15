import { IMAGES } from '../constants';

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case IMAGES.LOADING_ERROR: // lấy ảnh thất bại thì hiện ra lỗi
            return action.err;

        case IMAGES.LOADING:
        case IMAGES.LOADING_SUCCESS:
            return null;

        default:
            return state;
    }
};

export default errorReducer;
