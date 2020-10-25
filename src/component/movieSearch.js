import React from 'react';

const MovieSearch = ({
    onClick,
    onChange,
    volatile,
}) => {
    const {value,dropDownValue} = volatile || '';
    return(
        <div className="searchWrapper">
            <input type="text" name="value" value = {value} onChange={onChange} placeholder="Enter title eg:-batman" className="searchInput"/>
            <select name="dropDownValue" onChange={onChange} value={dropDownValue} className="dropDownValue">
                <option value ="">Type dropdown</option>
                <option value ="all">All</option>
                <option value ="movie">Movie</option>
                <option value ="series">Series</option>
                <option value ="episode">Episode</option>
            </select>
            <button onClick ={onClick} className="searchBTN">Search</button>
            
        </div>
    )
}
export default MovieSearch;