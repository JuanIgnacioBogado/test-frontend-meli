import {fetcher} from '../utils/index.js';

const meliUrl = 'https://api.mercadolibre.com';

export const fetchDetail = async id => await fetcher(`${meliUrl}/items/${id}`);

export const fetchDescription = async id => await fetcher(`${meliUrl}/items/${id}/description`);

export const fetchProducts = async query => await fetcher(`${meliUrl}/sites/MLA/search?q=${query}`);

export const fetchProduct = async id => {
    try {
        const [product, description] = await Promise.all([
            fetchDetail(id),
            fetchDescription(id)
        ]);

        if ((product?.error || description?.error)) {
            return {error: `Recurso no encontrado o el id: ${id} no es válido, prueba buscando otro producto`};
        }

        return {
            product,
            sold_quantity: product?.sold_quantity,
            description: description?.plain_text
        }
    } catch ({message}) {
        console.log(message);
    }
};