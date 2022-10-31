import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import CharacterTable from "./components/CharacterTable/CharacterTable";
import Pagination from "./components/Pagination/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "./components/Images/titleImage.png";

function App() {
    const swapi_url = `https://swapi.dev/api/people/?page=1`;
    const [characters, setCharacters] = useState([]);
    const [url, setUrl] = useState(swapi_url);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [previousPageUrl, setPreviousPageUrl] = useState("");
    const [nextPageUrl, setNextPageUrl] = useState("");
    const [search, setSearch] = useState("");

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
            <img className="title-image" src={image} alt="title image"></img>
            <SearchBar
                url={url}
                setUrl={setUrl}
                currentPageNumber={currentPageNumber}
                setCurrentPageNumber={setCurrentPageNumber}
                search={search}
                setSearch={setSearch}
            />
            <CharacterTable
                characters={characters}
                setCharacters={setCharacters}
            />
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
