import fetch from 'node-fetch';

export const fetcher = async path => {
    const response = await fetch(path);
    return await response.json();
};

const getDecimal = num => {
    if (Number.isInteger(num)) {
        return 0;
    }

    const decimalStr = num?.toString().split('.')[1];
    return Number(decimalStr);
}

export const getCategories = (filters = []) => {
    const categories = filters?.find(({id}) => id === 'category')?.values[0]?.path_from_root;

    if (categories) {
        return categories.map(({name}) => name);
    }
    return [];
}

export const renderItem = ({
    id,
    title,
    condition,
    shipping,
    thumbnail: picture,
    price,
    currency_id: currency
}) => ({
    id,
    title,
    price: {
        currency,
        amount: Math.trunc(price),
        decimals: getDecimal(price)
    },
    picture,
    condition,
    free_shipping: shipping?.free_shipping
})

export const renderItems = (items = []) => items?.slice(0, 4)?.map(renderItem);