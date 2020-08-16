// get your own key from unsplash please 😇

const URL = `https://api.unsplash.com/photos/`;

const fetchImages = async page => {
    const response = await fetch(
        `${URL}${process.env.REACT_APP_KEY}&per_page=3&page=${page}`,
    );

    const data = await response.json();

    if (response.status >= 400) {
        throw new Error(data.errors); //throw new Error để trả error vào catch bên saga nếu không có sẽ thì bên saga sẽ không chạy vào catch
    }

    return data;
};

const fetchImagesStats = async id => {
    const response = await fetch(
        `${URL}/${id}/statistics${process.env.REACT_APP_KEY}`,
    );

    const data = await response.json();

    if (response.status >= 400) {
        throw new Error(data.errors); //throw new Error để trả error vào catch bên saga nếu không có sẽ thì bên saga sẽ không chạy vào catch
    }

    return data;
};

export { fetchImages, fetchImagesStats };
