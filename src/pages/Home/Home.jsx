import { useState, useEffect } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { MoviesList } from 'components';

import { getTrending } from 'services/fetch';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        try {
            getTrending().then(response => {
                setMovies(response.data.results);
            })
        } catch {
            Notify.failure("Oops! Something in this life went wrong... Try again later.")
        }
    }, []);

    return (
        <>
            <h2>Trending today</h2>
            <MoviesList movies={movies}/>
        </>
    )
};

export default Home;