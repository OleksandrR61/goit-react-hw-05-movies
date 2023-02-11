import axios from 'axios';
import PropTypes from 'prop-types';

const API_KEY = 'cfdd02dd28707c6f234d1fe341252632';

const themoviedbFetch = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

export const getTrending = async () => {
    const params = {
        api_key: API_KEY,
    };
    
    return await themoviedbFetch.get('trending/all/day', {params});
};

export const getSearch = async ({query, page}) => {
    const params = {
        api_key: API_KEY,
        query,
        page,
    };
    
    return await themoviedbFetch.get('search/movie', {params});
}

export const getMovie = async (movieId) => {
    const params = {
        api_key: API_KEY,
    };

    return await themoviedbFetch.get(`movie/${movieId}`, {params});
}

export const getMovieCast = async (movieId) => {
    const params = {
        api_key: API_KEY,
    };
    
    return await themoviedbFetch.get(`movie/${movieId}/credits`, {params});
}

getSearch.propTypes = {
    query: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
};

getMovie.propTypes = {
    moviId: PropTypes.string.isRequired,
};

getMovieCast.propTypes = {
    moviId: PropTypes.string.isRequired,
};