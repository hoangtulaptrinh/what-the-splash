import { IMAGES } from '../constants';

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case IMAGES.LOADING: // khi vừa gọi api lấy ảnh thì hiện loading
            return true;

        case IMAGES.LOADING_SUCCESS: // khi lấy ảnh thành công hay thất bại thì cũng bỏ loading đi
            return false;

        case IMAGES.LOADING_ERROR: // khi lấy ảnh thành công hay thất bại thì cũng bỏ loading đi
            return false;

        default:
            return state;
    }
};

export default loadingReducer;
