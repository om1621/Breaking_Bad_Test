import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header'
import CharacterGrid from './components/CharacterGrid'

const App = () => {

  const [characters, setcharacters] = useState([]);
  const [loading, setloading] = useState(true);

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
    <CharacterGrid loading = {loading} chars = {characters} />
    </div>
  );
}

export default App;
