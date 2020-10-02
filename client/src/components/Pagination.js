import React from 'react'
import "../css/pagination.css"
import store from '../store/index'
import {createPageAction} from '../actions/index'


const Pagination = ({totalPages}) => {

    const pages = [];

    for( let i = 1 ; i <= totalPages ; i++)
    {
        pages.push(i);
    }

    const pageChange = (e) => {
        e.preventDefault();
        let pageNumber = e.target.dataset.page;
        store.dispatch(createPageAction(pageNumber));
    }

    return (

            <div className="page-grid" style={{ maxWidth: "768px", margin: "2rem auto", display: "flex", justifyContent:"center", alignItems: "center"}}>
                <ul class="pagination pagination-lg">
                    { pages.map((page) => (
                        <li key={page} className="page-item">
                            <a onClick={pageChange} data-page={page} className="page-link">{page}</a>
                        </li>
                    ))}
                </ul>
            </div>
    )
}

export default Pagination;
