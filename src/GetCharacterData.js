// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Table from "./Table";

// function GetCharacterData({ searchUrl }) {
//     const [characters, setCharacters] = useState([]);

//     const swapi_url = searchUrl;

//     const getPlanet = async (planet_url) => {
//         const planet = await axios.get(planet_url);
//         return planet.data.name;
//     };

//     const getSpecies = async (species_url) => {
//         let species = await axios.get(species_url);
//         !species.data.name
//             ? (species = "Human")
//             : (species = species.data.name);
//         return species;
//     };

//     useEffect(() => {
//         const getCharacterData = async () => {
//             const response = await axios.get(swapi_url);
//             const chars = response.data.results;
//             for (let char of chars) {
//                 char.planet = await getPlanet(char.homeworld);
//                 char.species = await getSpecies(char.species);
//             }

//             setCharacters(chars);
//             return chars;
//         };
//         getCharacterData();
//     }, []);

//     return <Table characters={characters} setCharacters={setCharacters} />;
// }

// export default GetCharacterData;
