import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

const MoviesList = ({movies}) => {
    const location = useLocation();

    return (
        <>
            <ul>
                {movies.map(({id, title, name, original_title, original_name}) =>
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={{from: location}}>
                            {title ?? name ?? original_title ?? original_name}
                        </Link>
                    </li>
                )}
            </ul>
        </>
    );
};

export default MoviesList

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
};