import { useState, useEffect } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { MoviesList } from 'components';
import { SearchForm } from './components/SearchForm/SearchForm';

import { getSearch } from 'services/fetch';

const Movies = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const handleSubmit = (string) => {
        setQuery(string);
    }

    const handleClick = step => {
        setPage(prev => prev + step);
    };

    useEffect(() => {
        try {
            getSearch({query, page}).then(({data}) => {
                setMovies(data.results);
                setPage(data.page);
                setTotalPage(data.total_pages);
            })
        } catch {
            Notify.failure("Oops! Something in this life went wrong... Try again later.")
        }
    }, [query, page]);

    return (
        <>
            <SearchForm onSubmit={handleSubmit} />
            {movies.length > 0 && <MoviesList movies={movies} />}
            {page !== 1 && <button type='button' onClick={()=>{handleClick(-1)}}>Previous page</button>}
            {page !== totalPage && <button type='button' onClick={()=>{handleClick(1)}}>Next page</button>}
        </>
    )
};

export default Movies;