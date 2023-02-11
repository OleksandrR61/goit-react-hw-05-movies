import { Link, useLocation } from 'react-router-dom';

import { About } from './components/About/About';
import { AddInfo } from './components/AddInfo/AddInfo';

const MovieDetails = () => {
    const location = useLocation();

    return (
        <>
            <Link to={location.state?.from ?? "/"}>Go back</Link>
            <About />
            <AddInfo />
        </>
    );
};

export default MovieDetails;