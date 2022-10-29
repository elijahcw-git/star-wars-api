import { useState, useRef } from "react";
import { Form } from "react-bootstrap";
import App from "./App";

const Search = ({ url, setUrl, currentPageNumber }) => {
    const searchInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setUrl(
            searchInput.current.value === ""
                ? `https://swapi.dev/api/people/?page=${currentPageNumber}`
                : `https://swapi.dev/api/people/?search=${searchInput.current.value}`
        );
        console.log(url);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <input
                placeholder="Enter the Character Name here"
                ref={searchInput}
            />
            <button>Search</button>
        </Form>
    );
};

export default Search;

// character.filter((post) => {
//     if (query === "") {
//         //if query is empty
//         return post;
//     } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
//         //returns filtered array
//         return post;
//     }
// });
