import { IMAGES, STATS } from '../constants';

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

export const loadImagesStats = id => ({
    type: STATS.LOADING,
    id,
});

export const setImageStats = (id, downloads) => ({
    type: STATS.LOADING_SUCCESS,
    id,
    downloads,
});

export const setImageStatsError = id => ({
    type: STATS.LOADING_ERROR,
    id,
});
