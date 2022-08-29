import {Link} from 'react-router-dom';
import './index.scss';

import {formatCurrency, getDecimal} from '@helpers';

import carIcon from '@assets/ic_shipping.png';

const Card = ({
    car = false,
    id,
    picture,
    title,
    price
}) => (
    <article className="card">
        <Link to={`/items/${id}`}>
            <div className="card-image">
                <img src={picture} alt={title} />
            </div>
            <div className="card-body">
                <div className="card-price">
                    <h3>
                        <span>
                            $ {formatCurrency(price?.amount)} {''}
                            <small>{getDecimal(price?.decimals)}</small>
                        </span>
                        {car && (
                            <div className="car">
                                <img src={carIcon} alt="car" />
                            </div>
                        )}
                    </h3>
                    <span>Capital Federal</span>
                </div>
                <h2 className="card-title">{title}</h2>
            </div>
        </Link>
    </article>
);

export default Card;
