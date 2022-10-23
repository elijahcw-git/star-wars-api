import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react'
import GetCharacterData from "./GetCharacterData"
import SearchBar from './SearchBar';

function App() {

  return (
    <div className="App">
    <SearchBar />
    <GetCharacterData />
    </div>
  );
 
}

export default App;
