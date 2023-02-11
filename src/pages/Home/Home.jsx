import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getTrending } from 'services/fetch';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrending().then(response => {
            setMovies(response.data.results);
        })
    }, []);

    return (
        <>
            <h2>Trending today</h2>
            <ul>
                {movies.map(({id, title, name, original_title, original_name}) =>
                    <li key={id}>
                        <Link>{title ?? name ?? original_title ?? original_name}</Link>
                    </li>
                )}
            </ul>
        </>
    )
};

export default Home;