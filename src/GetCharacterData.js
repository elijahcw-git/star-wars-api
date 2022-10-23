import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function GetCharacterData() {
    const [characters, setCharacters] = useState([]);

    const swapi_url = "https://swapi.dev/api/people/?page=1";

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
            const response = await axios.get(swapi_url);
            const chars = response.data.results;

            for (let i = 0; i < chars.length; i++) {
                chars[i].planet = await getPlanet(chars[i].homeworld);
                chars[i].species = await getSpecies(chars[i].species);
            }
            // for (let char of chars) {
            //     char.planet = await getPlanet(char.homeworld);
            //     char.species = await getSpecies(char.species);
            // }
            console.log(chars);
            setCharacters(chars);
        };
        getCharacterData();
    }, []);

    return (
        <>
            {characters.map((character, id) => {
                return (
                    <tr key={id}>
                        <td>{character.name}</td>
                        <td>{character.birth_year}</td>
                        <td>{character.height} cm</td>
                        <td>{character.mass} kg</td>
                        <td>{character.planet}</td>
                        <td>{character.species}</td>
                    </tr>
                );
            })}
        </>
    );
}

export default GetCharacterData;
