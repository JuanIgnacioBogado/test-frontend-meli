import './index.scss';

import carIcon from '@assets/ic_shipping.png';

const Card = ({car = false}) => {
    return (
        <article className="card">
            <a href="#">
                <div className="card-image">
                    <img
                        src="https://http2.mlstatic.com/D_976401-MLA51245388828_082022-I.jpg"
                        alt="nombre"
                    />
                </div>
                <div className="card-body">
                    <div className="card-price">
                        <h3>
                            $1.980
                            {car && (
                                <div className="car">
                                    <img src={carIcon} alt="car" />
                                </div>
                            )}
                        </h3>
                        <span>Capital Federal</span>
                    </div>
                    <h2 className="card-title">
                        Peluche Bob Esponja-patricio-don
                        Cangrejo-calamardo-gary-c/u
                    </h2>
                </div>
            </a>
        </article>
    );
};

export default Card;
