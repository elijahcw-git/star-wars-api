import { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import "./SearchBar.css";

const SearchBar = ({ setUrl, setCurrentPageNumber, setIsLoading }) => {
    const [inputValue, setInputValue] = useState("");
    const searchInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            setUrl(
                `https://swapi.dev/api/people/?search=${searchInput.current.value}`
            );
        } catch (err) {
            console.log(err);
        }
        setInputValue("");
        setCurrentPageNumber(1);
    };

    const handleReset = (e) => {
        e.preventDefault();
        setUrl("https://swapi.dev/api/people/?page=1");
        setIsLoading(true);
        setInputValue("");
        setCurrentPageNumber(1);
    };

    return (
        <Form className="character-search-form" onSubmit={handleSubmit}>
            <input
                className="character-text-search"
                placeholder="Enter the Character Name here"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                ref={searchInput}
                required
            />
            <Button
                className="search-submit-button"
                variant="warning"
                type="submit"
            >
                Search
            </Button>
            <Button
                className="search-reset-button"
                variant="danger"
                onClick={handleReset}
            >
                Reset
            </Button>
        </Form>
    );
};

export default SearchBar;
