import { IMAGES } from '../constants';

export const loadImages = () => ({
    type: IMAGES.LOADING,
});

export const setIMAGES = images => ({
    type: IMAGES.LOADING_SUCCESS,
    images,
});

export const setError = err => ({
    type: IMAGES.LOADING_ERROR,
    err,
});
