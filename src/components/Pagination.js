import React from 'react'
import "../css/pagination.css"


const Pagination = ({totalPages , pageChange}) => {

    const pages = [];

    for( let i = 1 ; i <= totalPages ; i++)
    {
        pages.push(i);
    }

    return (

            <div className="page-grid" style={{ maxWidth: "768px", margin: "2rem auto", display: "flex", justifyContent:"center", alignItems: "center"}}>
                <ul class="pagination pagination-lg">
                    { pages.map((page) => (
                        <li key={page} className="page-item">
                            <a onClick={() => pageChange(page)} className="page-link" href="!#">{page}</a>
                        </li>
                    ))}
                </ul>
            </div>
    )
}

export default Pagination;
