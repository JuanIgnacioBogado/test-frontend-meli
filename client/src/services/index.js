const {VITE_SERVER_URL} = import.meta.env;

const meliUrl = `${VITE_SERVER_URL}/items`

export const fetchProducts = async search => {
    const query = (new URLSearchParams({q: search})).toString();

    try {
        const response = await fetch(`${meliUrl}?${query}`);
        return await response.json();
    } catch ({message}) {
        console.log(message);
    }
};

export const fetchProduct = async id => {
    try {
        const response = await fetch(`${meliUrl}/${id?.toUpperCase()}`);
        return await response.json();
    } catch ({message}) {
        console.log(message);
    }
};