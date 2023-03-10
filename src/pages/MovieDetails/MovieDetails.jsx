import { Suspense } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

import { About } from './components/About/About';
import { AddInfo } from './components/AddInfo/AddInfo';

const MovieDetails = () => {
    const location = useLocation();

    const locationFrom = location.state?.from ?? "/"

    return (
        <>
            <Link to={locationFrom}>Go back</Link>
            <About />
            <AddInfo state={{from: locationFrom}}/>
            <Suspense fallback={<p>Loading...</p>}>
                <Outlet />
            </Suspense>
        </>
    );
};

export default MovieDetails;