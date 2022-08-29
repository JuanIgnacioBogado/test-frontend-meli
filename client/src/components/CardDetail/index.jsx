import './index.scss';

import {formatCurrency, getDecimal} from '@helpers/index';

const CardDetail = () => {
    return (
        <div className="card-detail">
            <div className="card-content">
                <div className="card-img">
                    <img
                        src="https://http2.mlstatic.com/D_976401-MLA51245388828_082022-I.jpg"
                        alt="card-img"
                    />
                </div>
                <div className="card-price">
                    <span>Nuevo - 100 vendidos</span>
                    <h1>
                        Peluche Bob Esponja-patricio-don
                        Cangrejo-calamardo-gary-c/u
                    </h1>
                    <h2>
                        $ {formatCurrency(1980)} <small>{getDecimal(0)}</small>
                    </h2>
                    <button>Comprar</button>
                </div>
            </div>
            <div className="card-description">
                <h2>Descripción del producto</h2>
                <p>
                    {
                        'Descripción\n hermoso peluche Patricio Estrella y Bob Esponja hermosos de buena calidad importado \n\n-Medida: 25 cm de altura\n\n-Material: peluche\n\n El tamaño varía según el personaje.\n\nRETIRO POR NUESTRO LOCAL \n-Estamos en Microcentro cerca de suipacha y paraguay a una cuadras de la estación San Martin Linea C\n-Podés retirar de lunes a sábados de 9am a 19horas\n\n-Realizamos envíos a todo el país a través de Mercado envíos'
                    }
                </p>
            </div>
        </div>
    );
};

export default CardDetail;
