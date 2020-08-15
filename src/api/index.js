// get your own key from unsplash please 😇

const URL = `https://api.unsplash.com/photos/`;

const fetchImages = async page => {
    const response = await fetch(
        `${URL}${process.env.REACT_APP_KEY}&per_page=3&page=${page}`,
    );

    const data = await response.json();

    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export { fetchImages };
