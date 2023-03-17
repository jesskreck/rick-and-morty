// create with rafce

import React from 'react'
import "../styles/pagination.css"



const Pagination = ({pageNumber, setPageNumber}) => {
    
    let next = () => {
        setPageNumber((currentPage) => currentPage + 1);
    };

    let prev = () => {
        if (pageNumber === 1) return;
        setPageNumber((currentPage) => currentPage - 1);

    };

    return (
        <div className='container button__holder'>
            <button onClick={prev} className='button-30'>Previous</button>
            <h1>{pageNumber}</h1>
            <button onClick={next} className='button-30'>Next</button>
        </div>
    )
}

export default Pagination