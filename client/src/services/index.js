export const fetchProducts = async search => {
    const query = (new URLSearchParams({q: search})).toString();

    try {
        const response = await fetch(`http://localhost:4000/api/items?${query}`);
        return await response.json();
    } catch ({message}) {
        console.log(message);
    }
};

export const fetchProduct = async id => {
    try {
        const response = await fetch(`http://localhost:4000/api/items/${id?.toUpperCase()}`);
        return await response.json();
    } catch ({message}) {
        console.log(message);
    }
};