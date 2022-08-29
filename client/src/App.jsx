import {Routes, Route} from 'react-router-dom';

import ProductList from '@pages/ProductList';
import ProductDetail from '@pages/ProductDetail';
import EmptyState from '@pages/EmptyState';
import NotFound from '@pages/NotFound';

import Navbar from '@components/Navbar';
import ProductsProvider from '@context';

import 'App.scss';

function App() {
    return (
        <ProductsProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<EmptyState />} />
                <Route path="/items" element={<ProductList />} />
                <Route path="/items/:id" element={<ProductDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ProductsProvider>
    );
}

export default App;
