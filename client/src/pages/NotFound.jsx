import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container content">
            <h1>404 - Página no encontrada</h1>
            <Link to="/">Volver al Home</Link>
        </div>
    );
};

export default NotFound;
