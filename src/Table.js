import GetCharacterData from "./GetCharacterData";

const Table = () => {
    return (
        <table>
            <thead>
                <th>Name</th>
                <th>Birth Year</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Home Planet</th>
                <th>Species</th>
            </thead>
            <tbody>
                <GetCharacterData />
            </tbody>
        </table>
    );
};

export default Table;
