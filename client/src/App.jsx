import 'App.scss';

import ProductList from '@pages/ProductList';
import ProductDetail from '@pages/ProductDetail';

import Navbar from '@components/Navbar';

function App() {
    return (
        <>
            <Navbar />

            {/* <ProductList /> */}
            <ProductDetail />
        </>
    );
}

export default App;
