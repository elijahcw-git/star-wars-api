import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import GetCharacterData from "./GetCharacterData";
import SearchBar from "./SearchBar";
import Table from "./Table";

function App() {
    return (
        <div className="App">
            <SearchBar />
            <Table />
        </div>
    );
}

export default App;
