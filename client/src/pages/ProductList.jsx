import {Fragment, useEffect} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

import {useQuery} from '@hooks';
import {fetchProducts} from '@services';
import {useProducts} from '@context';

import Card from '@components/Card';
import EmptyState from '@pages/EmptyState';

const ProductList = () => {
    const query = useQuery();
    const navigate = useNavigate();
    const {setProducts, products, loading, setLoading} = useProducts();

    const search = query.get('search');

    useEffect(() => {
        (async () => {
            if (search?.toLocaleLowerCase()?.includes('mla')) {
                return navigate(`/items/${search}`);
            }

            setLoading(true);
            const data = await fetchProducts(search);
            setProducts(data);
            setLoading(false);
        })();

        () => {
            setProducts({});
        }
    }, [query]);

    if (!search) {
        return <Navigate to="/" />;
    }

    if (loading) {
        return <EmptyState text="Cargando..." />
    }

    if (!products?.items?.length) {
        return <EmptyState text="No se encontraron resultados, intenta con otra búsqueda" />;
    }

    return (
        <div className="mx">
            <section className="container content">
                {products?.items?.map((data, idx) => (
                    <Fragment key={data.id}>
                        <Card car={(idx + 1) % 2 === 0 && true} {...data} />
                        {idx !== 3 && <hr />}
                    </Fragment>
                ))}
            </section>
        </div>
    );
};

export default ProductList;
