import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { getMovieReviews } from 'services/fetch';

const Reviews = ({state}) => {
    const [movieReviews, setMovieReviews] = useState([]);
    const { movieId } = useParams();
    
    useEffect(() => {
        try {
            getMovieReviews(movieId).then(response => {
                setMovieReviews(response.data.results);
            });
        } catch {
            Notify.failure("Oops! Something in this life went wrong... Try again later.")
        };
    }, [movieId]);

    return (
        <>
            {movieReviews.length > 0 ?
                <ul>
                    {movieReviews.map(review => 
                        <li key={review.id}>
                            <p>Author: {review.author}</p>
                            <p>{review.content}</p>
                            </li>
                    )}
                </ul> :
                <p>We don't have reviews for this movie.</p>
            }
        </>
    );
};

export default Reviews;