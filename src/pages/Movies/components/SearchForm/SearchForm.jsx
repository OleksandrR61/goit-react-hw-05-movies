import { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchForm = ({onSubmit}) => {
    const [query, setQuery] = useState("");

    const handleChange = ({target}) => {
        setQuery(target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        onSubmit(query);

        setQuery("");
    }

    return (
        <form onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={handleChange}/>
                <button type='submit'>Search</button>
        </form>
    );
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};