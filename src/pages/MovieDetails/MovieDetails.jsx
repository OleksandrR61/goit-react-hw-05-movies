import { Link, useLocation } from 'react-router-dom';

import { About } from './components/About/About';

const MovieDetails = () => {
    const location = useLocation();

    return (
        <>
            <Link to={location.state?.from ?? "/"}>Go back</Link>
            <About />
        </>
    );
};

export default MovieDetails;