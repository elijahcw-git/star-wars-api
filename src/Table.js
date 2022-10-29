import React from "react";
import { v4 as uuid } from "uuid";

const Table = ({ characters }) => {
    // console.log(characters);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Birth Year</th>
                        <th>Height</th>
                        <th>Weight</th>
                        <th>Home Planet</th>
                        <th>Species</th>
                    </tr>
                </thead>
                <tbody>
                    {characters.map((characters) => {
                        return (
                            <tr key={uuid()}>
                                <td>{characters.name}</td>
                                <td>{characters.birth_year}</td>
                                <td>{characters.height} cm</td>
                                <td>{characters.mass} kg</td>
                                <td>{characters.planet}</td>
                                <td>{characters.species}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
