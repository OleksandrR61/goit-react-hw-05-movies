import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { getMovieCast } from 'services/fetch';

const Cast = () => {
    const [movieCast, setMovieCast] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { movieId } = useParams();
    
    useEffect(() => {
        try {
            getMovieCast(movieId).then(response => {
                setMovieCast(response.data.cast);
            }).finally(() => {setIsLoading(false);});
        } catch {
            Notify.failure("Oops! Something in this life went wrong... Try again later.")
        };
    }, [movieId]);

    return (
        !isLoading ?
        <>
            {movieCast.length > 0 ?
                <ul>
                    {movieCast.map(actor => 
                        <li key={actor.id}>
                            {actor.profile_path &&
                                <img
                                    src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                                    alt=""
                                    width="100"
                                />
                            }
                            <p>{actor.name}</p>
                            <p>Role: {actor.character}</p>
                            </li>
                    )}
                </ul> :
                <p>Sorry, we have no information about the cast</p>
            }
        </> : <p>Loading...</p>
    );
};

export default Cast;