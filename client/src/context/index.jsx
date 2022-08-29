import {useState, useContext, createContext} from 'react';

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState({});
    const [productDetail, setProductDetail] = useState({});
    const [loading, setLoading] = useState(false);

    return (
        <ProductsContext.Provider
            value={{
                products,
                productDetail,
                setProducts,
                setProductDetail,
                loading,
                setLoading
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;
