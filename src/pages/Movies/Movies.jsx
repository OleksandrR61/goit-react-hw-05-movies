import { useState, useEffect } from 'react';

import { MoviesList } from 'components';

import { getSearch } from 'services/fetch';

const Movies = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const handleChange = ({target}) => {
        setQuery(target.value);
    };

    const handleSubmit = () => {
        fetchMovies();
    }

    const fetchMovies = () => {
        try {
            getSearch({query, page}).then(({data}) => {
                setMovies(data.results);
                setPage(data.page);
                setTotalPage(data.total_pages);
            })
        } catch {
            Notify.failure("Oops! Something in this life went wrong... Try again later.")
        }
    }

    return (
        <>
            <form>
                <input type="text" value={query} onChange={handleChange}/>
                <button type='submit'>Search</button>
            </form>
            {movies.length > 0 && <MoviesList movies={movies} />}
            {page !== 1 && <button type='button'>Previous page</button>}
            {page !== totalPage && <button type='button'>Next page</button>}
        </>
    )
};

export default Movies;