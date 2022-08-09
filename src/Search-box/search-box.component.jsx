import React from 'react';
import './search-box.styles.css';

function SearchBox({ onSearchChange }) {
    return (
        <>
            <input
                type='search'
                className='search-box'
                placeholder='search contacts'
                onChange={onSearchChange}
            />
        </>
    );
}

export default SearchBox;