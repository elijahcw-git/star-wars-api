import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
// import GetCharacterData from "./GetCharacterData";
import Search from "./SearchBar";
import Table from "./Table";
import Pagination from "./Pagination";

function App() {
    const swapi_url = `https://swapi.dev/api/people/?page=1`;

    const [characters, setCharacters] = useState([]);
    const [url, setUrl] = useState(swapi_url);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [previousPageUrl, setPreviousPageUrl] = useState("");
    const [nextPageUrl, setNextPageUrl] = useState("");

    const getPlanet = async (planet_url) => {
        const planet = await axios.get(planet_url);
        return planet.data.name;
    };

    const getSpecies = async (species_url) => {
        let species = await axios.get(species_url);
        !species.data.name
            ? (species = "Human")
            : (species = species.data.name);
        return species;
    };

    useEffect(() => {
        const getCharacterData = async () => {
            const response = await axios.get(url);
            setPreviousPageUrl(response.data.previous);
            setNextPageUrl(response.data.next);
            const chars = response.data.results;
            for (let char of chars) {
                char.planet = await getPlanet(char.homeworld);
                char.species = await getSpecies(char.species);
            }
            setCharacters(chars);
            return chars;
        };
        getCharacterData();
    }, [url]);

    return (
        <div className="App">
            <h1>Star Wars API</h1>
            <Search
                url={url}
                setUrl={setUrl}
                currentPageNumber={currentPageNumber}
            />
            <Table characters={characters} setCharacters={setCharacters} />
            <Pagination
                characters={characters}
                currentPageNumber={currentPageNumber}
                setCurrentPageNumber={setCurrentPageNumber}
                previousPageUrl={previousPageUrl}
                setPreviousPageUrl={setPreviousPageUrl}
                nextPageUrl={nextPageUrl}
                setNextPageUrl={setNextPageUrl}
                setUrl={setUrl}
                url={url}
            />
        </div>
    );
}

export default App;
