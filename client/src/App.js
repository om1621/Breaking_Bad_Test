import React, {useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import CharacterGrid from './components/CharacterGrid';
import Pagination from './components/Pagination';
import SearchBox from './components/SearchBox';
import Test from './components/Test';
import store from './store/index';
import {createCharatersAction, createLoadingStateAction} from './actions/index';

const App = () => {

  // For pagination data

  const lastChar = store.getState().page * store.getState().charPerPage;
  const firstChar = lastChar - store.getState().charPerPage;
  const currChars = store.getState().characters.slice(firstChar, lastChar);
  const totalPages = Math.ceil(store.getState().characters.length / store.getState().charPerPage);

  // loading characters usind BreakingBad API

  const searchValue = store.getState().searchValue;

  useEffect(() => {
    const getChar = async () => {
      let chars = await axios('https://www.breakingbadapi.com/api/characters?name=' + searchValue); // axios returns a promise
      store.dispatch(createCharatersAction(chars.data));
      store.dispatch(createLoadingStateAction(false));
    }

    getChar();
  }, [searchValue]) // useEffect need a dependacy as parameter

  switch(store.getState().section)
  {
    case 1:
      return (
        <div className="Container">
        <Header />
        <SearchBox/>
        <CharacterGrid loading = {store.getState().loading} chars = {currChars} />
        <Pagination totalPages={totalPages} />
        </div>
      );
    case 2:
      return (
        <div className="Container">
        <Header />
        <Test charId={store.getState().charId}/>
        </div>
      );

    default:
      return (
        <div className="Container">
        <Header />
        <SearchBox/>
        <CharacterGrid loading = {store.getState().loading} chars = {currChars} />
        <Pagination totalPages={totalPages} />
        </div>
      );
  }

  
}

export default App;
