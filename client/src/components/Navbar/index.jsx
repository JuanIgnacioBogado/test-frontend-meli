import logo from '@assets/Logo_ML@2x.png';
import search from '@assets/ic_Search@2x.png';

import Breadcrumb from '@components/Breadcrumb';

import './index.scss';

const Navbar = () => {
    return (
        <>
            <header>
                <div className="mx">
                    <nav className="container navbar">
                        <a href="/" className="logo">
                            <img src={logo} alt="logo-meli" />
                        </a>
                        <div className="input-search">
                            <input
                                type="text"
                                placeholder="Nunca dejes de buscar"
                            />
                            <div className="lupa">
                                <img src={search} alt="lupa" />
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <Breadcrumb />
        </>
    );
};

export default Navbar;
