import {Link, useNavigate} from 'react-router-dom';
import logo from '@assets/Logo_ML@2x.png';
import search from '@assets/ic_Search@2x.png';

import Breadcrumb from '@components/Breadcrumb';

import './index.scss';
import {useState} from 'react';
import {useProducts} from '@context';

const Navbar = () => {
    const navigate = useNavigate();
    const {products} = useProducts();
    const [query, setQuery] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (!query.trim()) return;

        navigate(`items?search=${query}`);
    };

    const onKeyDown = e => {
        if (e.key === 'Enter') {
            onSubmit(e);
        }
    };

    return (
        <>
            <header>
                <div className="mx">
                    <nav className="container navbar">
                        <Link to="/" className="logo">
                            <img src={logo} alt="logo-meli" />
                        </Link>
                        <div className="input-search">
                            <input
                                value={query}
                                onChange={({target: {value}}) =>
                                    setQuery(value)
                                }
                                type="text"
                                placeholder="Nunca dejes de buscar"
                                onKeyDown={onKeyDown}
                            />
                            <div className="lupa" onClick={onSubmit}>
                                <img src={search} alt="lupa" />
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {products?.categories?.length && (
                <Breadcrumb categories={products?.categories} />
            )}
        </>
    );
};

export default Navbar;
