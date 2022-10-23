import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function GetCharacterData() {
    const [characters, setCharacters] = useState([]);

    const swapi_url = "https://swapi.dev/api/people";

    const getPlanet = async (planet_url) => {
        await axios.get(planet_url).then((planet) => {
            return planet.data.name;
        });
    };

    const getSpecies = async (species_url) => {
        await axios.get(species_url).then((species) => {
            species = species.data.name;
            !species ? (species = "Human") : (species = species);
            //console.log(species);
            return species;
        });
    };

    useEffect(() => {
        const getCharacterData = async () => {
            await axios.get(swapi_url).then((chars) => {
                chars = chars.data.results;
                chars.forEach(async (char) => {
                    console.log(char.homeworld);
                    char.homeWorld = await getPlanet(char.homeworld);
                    char.species = await getSpecies(char.species);
                    console.log(char);
                });
                setCharacters(chars);
            });
        };
        getCharacterData();
    }, []);

    return (
        <div>
            {!characters ? (
                <h2 className="loading">Loading Data</h2>
            ) : (
                characters.map((character, id) => {
                    return (
                        <div key={id}>
                            <p>{character.name}</p>
                            <p>{character.homeWorld}</p>
                            <p>{character.species}</p>
                        </div>
                    );
                })
            )}
        </div>
    );
}

export default GetCharacterData;
