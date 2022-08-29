import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import {useProducts} from '@context';

const EmptyState = ({text = ''}) => {
    const {pathname} = useLocation();
    const {setProducts} = useProducts();

    useEffect(() => {
        if (pathname === '/') {
            setProducts({});
        }
    }, [pathname]);

    return (
        Boolean(text) && (
            <div className="container content">
                <h1 style={{textAlign: 'center'}}>{text}</h1>
            </div>
        )
    );
};

export default EmptyState;
