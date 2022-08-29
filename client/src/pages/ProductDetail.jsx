import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {fetchProduct} from '@services';
import {useProducts} from '@context';

import CardDetail from '@components/CardDetail';
import EmptyState from '@pages/EmptyState';

const ProductDetail = () => {
    const {id} = useParams();
    const {
        loading,
        setLoading,
        setProductDetail,
        productDetail: {error, item = {}}
    } = useProducts();

    useEffect(() => {
        (async () => {
            if (id) {
                setLoading(true);
                const data = await fetchProduct(id);
                setProductDetail(data);
                return setLoading(false);
            }
        })();

        return () => {
            setProductDetail({});
        };
    }, [id]);

    if (error) {
        return <EmptyState text={error} />;
    }

    return loading ? (
        <EmptyState text="Cargando..." />
    ) : (
        <div className="mx">
            <section className="container content">
                <CardDetail {...item} />
            </section>
        </div>
    );
};

export default ProductDetail;
