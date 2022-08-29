import { Fragment } from "react";

import Card from '@components/Card';

const ProductList = () => {
    return (
        <div className="mx">
            <section className="container content">
                {[0, 1, 2, 3].map((data, idx) => (
                    <Fragment key={idx}>
                        <Card car={(idx + 1) % 2 === 0 && true}/>
                        {(idx !== 3) && <hr/>}
                    </Fragment>
                ))}
            </section>
        </div>
    );
};

export default ProductList;
