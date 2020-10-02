import React from 'react'
import '../css/SearchBox.css'
import store from '../store/index';
import {createSearchValueAction} from '../actions/index'

const SearchBox = () => {

    const handleChange = (e) => {
        e.preventDefault();
        const inputValue = e.target.value;  
        store.dispatch(createSearchValueAction(inputValue));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="search-form p-4">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                     <input type="text" className="form-control form-control-lg" placeholder="Search Character....." value={store.getState().searchValue} onChange={handleChange} ></input>
                </div>
            </form>
        </div>
    )
}

export default SearchBox;
