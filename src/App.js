import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header'
import CharacterGrid from './components/CharacterGrid'
import Pagination from './components/Pagination'

const App = () => {

  const [characters, setcharacters] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [charPerPage] = useState(8);

  const lastChar = page * charPerPage;
  const firstChar = lastChar - charPerPage;
  const currChars = characters.slice(firstChar, lastChar);
  const totalPages = Math.ceil(characters.length / charPerPage);

  const pageChange = (pageNumber) => setpage(pageNumber);

  useEffect(() => {
    const getChar = async () => {
      let chars = await axios('https://www.breakingbadapi.com/api/characters'); // axios returns a promise
      
      console.log(chars.data);
      setcharacters(chars.data);
      setloading(false);
    }

    getChar();
  }, []) // useEffect need a dependacy as parameter

  return (
    <div className="Container">
    <Header />
    <CharacterGrid loading = {loading} chars = {currChars} />
    <Pagination totalPages={totalPages} pageChange={pageChange} />
    </div>
  );
}

export default App;
