import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import MoviesList from 'components/MoviesList/MoviesList';
import { SearchForm } from './components/SearchForm/SearchForm';

import { getSearch } from 'services/fetch';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [totalPage, setTotalPage] = useState(1);

    const query = searchParams.get("query") || "";
    const page = Number(searchParams.get("page")) || 1;

    const handleSubmit = (string) => {
        setSearchParams({ query: string, page: 1});
    };

    const handleClick = step => {
        setSearchParams({
            query,
            page: page + step,
        });
    };

    useEffect(() => {
        if (!searchParams.get("query")) {
            return;
        };

        try {
            getSearch({
                query: searchParams.get("query"),
                page: Number(searchParams.get("page"))
            }).then(({data}) => {
                setMovies(data.results);
                setTotalPage(data.total_pages);
            })
        } catch {
            Notify.failure("Oops! Something in this life went wrong... Try again later.")
        }
    }, [searchParams]);

    return (
        <>
            <SearchForm onSubmit={handleSubmit} />
            {movies.length > 0 && <MoviesList movies={movies} />}
            {page !== 1 &&
                <button type='button' onClick={()=>{handleClick(-1)}}>Previous page</button>
            }
            {page !== totalPage &&
                <button type='button' onClick={()=>{handleClick(1)}}>Next page</button>
            }
        </>
    )
};

export default Movies;