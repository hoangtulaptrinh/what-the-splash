import { IMAGES, STATS, HAREMS } from '../constants';

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

export const loadHarems = () => ({
    type: HAREMS.LOADING,
});

export const setHarems = harems => ({
    type: HAREMS.LOADING_SUCCESS,
    harems,
});

export const setHaremsError = err => ({
    type: HAREMS.LOADING_ERROR,
    err,
});
