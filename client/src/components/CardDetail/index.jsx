import './index.scss';

import {formatCurrency, getDecimal} from '@helpers';

const CardDetail = ({
    picture,
    condition,
    sold_quantity,
    title,
    price,
    description,
}) => (
    <div className="card-detail">
        <div className="card-content">
            <div className="card-img">
                <img src={picture} alt={title} />
            </div>
            <div className="card-price">
                <span>{`${condition === 'new' ? 'Nuevo' : 'Usado'} - ${sold_quantity} vendidos`}</span>
                <h1>{title}</h1>
                <h2>
                    $ {formatCurrency(price?.amount)} <small>{getDecimal(price?.decimals)}</small>
                </h2>
                <button>Comprar</button>
            </div>
        </div>
        <div className="card-description">
            <h2>Descripción del producto</h2>
            <p>{description}</p>
        </div>
    </div>
);

export default CardDetail;
