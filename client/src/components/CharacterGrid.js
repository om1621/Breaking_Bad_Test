import React from 'react';
import '../css/chargrid.css';
import loader from '../img/loading.gif'
import store from '../store/index'
import {createCharIdAction, createSectionAction, createLoadingStateAction} from '../actions/index'

const CharacterGrid = ({chars , loading}) => {

    const testSection = (e) => 
    {
        e.preventDefault();
        const charId = e.target.value;
        store.dispatch(createCharIdAction(charId));
        store.dispatch(createSectionAction(1)); 
        store.dispatch(createLoadingStateAction(true));
    }

    return (loading ? <div className="char-grid loader"><img src={loader} alt="loader" /></div> : <div className="char-grid row">

    {chars.map((char , index) => (
        <div className="col-lg-3 col-md-6 col-sm-12 text-center p-2 my-2s main-box" key={char.char_id}>
            <div className="img-box">
                <div className="front">
                    <img src={char.img} alt="char_img"/>
                </div>
                <div className="back">
                    <button className="btn" onClick = {testSection} value={char.char_id} >Take Test</button>
                </div>
            </div>
        </div>
    ))}

    </div>)
}

export default CharacterGrid;
