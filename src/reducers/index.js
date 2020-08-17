import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import haremReducer from './haremReducer';
import imagesReducer from './imagesReducer';
import loadingReducer from './loadingReducer';
import pageReducer from './pageReducer';
import statsReducer from './statsReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    err: errorReducer,
    nextPage: pageReducer,
    imageStats: statsReducer,
    harems: haremReducer,
});

export default rootReducer;
