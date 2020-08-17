// get your own key from unsplash please 😇

const IMAGES_URL = `https://api.unsplash.com/photos/`;

// images
const fetchImages = async page => {
    const response = await fetch(
        `${IMAGES_URL}${process.env.REACT_APP_KEY}&per_page=3&page=${page}`,
    );

    const data = await response.json();

    if (response.status >= 400) {
        throw new Error(data.errors); //throw new Error để trả error vào catch bên saga nếu không có sẽ thì bên saga sẽ không chạy vào catch
    }

    return data;
};

// stats
const fetchImagesStats = async id => {
    const response = await fetch(
        `${IMAGES_URL}/${id}/statistics${process.env.REACT_APP_KEY}`,
    );

    const data = await response.json();

    if (response.status >= 400) {
        throw new Error(data.errors); //throw new Error để trả error vào catch bên saga nếu không có sẽ thì bên saga sẽ không chạy vào catch
    }

    return data;
};

// harems
const HAREMS_URL = 'https://5f3a78f22300b100169a8c47.mockapi.io/harems';

const fetchHarems = () => fetch(HAREMS_URL);

export { fetchImages, fetchImagesStats, fetchHarems };
