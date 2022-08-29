import {
    fetchProduct,
    fetchProducts
} from '../services/index.js';

import {
    getCategories,
    renderItems,
    renderItem
} from '../utils/index.js';

const author = {
    name: 'Juan Ignacio',
    lastname: 'Bogado'
};

export const getProducts = async (req, res) => {
    try {
        const {q} = req?.query;
        const {results, filters} = await fetchProducts(q);

        res.json({
            author,
            categories: getCategories(filters),
            items: renderItems(results)
        });
    } catch ({message}) {
        console.log(message);
        res.json({message});
    }
};

export const getProductDetail = async (req, res) => {
    try {
        const {id} = req?.params;
        const {product, description, sold_quantity, error} = await fetchProduct(id);

        if (error) {
            return res.json({
                author,
                error
            });
        }

        res.json({
            author,
            item: {
                ...renderItem(product),
                sold_quantity,
                description
            }
        });
    } catch ({message}) {
        console.log(message);
        res.json({message});
    }
};