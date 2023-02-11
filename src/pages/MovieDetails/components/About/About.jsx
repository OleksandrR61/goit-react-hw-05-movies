import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { getMovie } from 'services/fetch';

import styles from './About.module.css';

export const About = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        try {
            getMovie(movieId).then(response => {
                setMovie(response.data);
            });
        } catch {
            Notify.failure("Oops! Something in this life went wrong... Try again later.")
        };
    }, [movieId]);
    
    return (
        <div className={styles.aboutBody}>
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="poster" />
        </div>
    );
};