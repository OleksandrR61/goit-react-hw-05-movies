import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { getMovie } from 'services/fetch';

import styles from './About.module.css';

export const About = () => {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const { movieId } = useParams();

    useEffect(() => {
        try {
            getMovie(movieId).then(response => {
                setMovie(response.data);
            }).finally(() => {setIsLoading(false);})
        } catch {
            Notify.failure("Oops! Something in this life went wrong... Try again later.")
        };
    }, [movieId]);

    return (
        !isLoading ?
        <>
            {movie.title ?
                <div className={styles.aboutBody}>
                    {
                        movie.poster_path &&
                            <img
                                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                                alt="poster"
                                className={styles.img}
                            />
                    }
                    <div>
                        <h2>{movie.title} ({String(movie.release_date).slice(0, 4)})</h2>
                        <p>User score: {Math.floor(movie.vote_average*10)}%</p>
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>
                        <h4>Genres</h4>
                        <ul className={styles.genres}>
                            {movie.genres.map(genre => 
                                <li key={genre.id} className={styles.genre}>{genre.name}</li>
                            )}
                        </ul>
                    </div>
                </div> : <p>Sorry, We don't have info for this movie.</p>
            }
        </> : <p>Loading...</p>
    );
};