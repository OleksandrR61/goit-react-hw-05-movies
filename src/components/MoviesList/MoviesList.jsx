import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

export const MoviesList = ({movies}) => {


    return (
        <>
            <ul>
                {movies.map(({id, title, name, original_title, original_name}) =>
                    <li key={id}>
                        <Link to={`/movies/${id}`}>
                            {title ?? name ?? original_title ?? original_name}
                        </Link>
                    </li>
                )}
            </ul>
        </>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
};