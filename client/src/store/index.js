import {createStore} from 'redux';
import reducer from '../reducers/index'

const initialState = {
    section: 1,
    characters: [],
    loading: true,
    page: 1,
    charPerPage: 8,
    charId: 1,
    searchValue: ""
}

const store = createStore(reducer, initialState);

export default store;