import React, {useState} from 'react'
import '../css/SearchBox.css'

const SearchBox = () => {

    const [inputValue, setinputValue] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setinputValue(e.target.value);
        console.log(inputValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("you searched for " + inputValue);
    }

    return (
        <div className="search-form p-4">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                     <input type="text" className="form-control form-control-lg" placeholder="Search Character....." value={inputValue} onChange={handleChange} ></input>
                </div>
            </form>
        </div>
    )
}

export default SearchBox;
