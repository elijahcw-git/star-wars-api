const Pagination = ({
    setNextPageUrl,
    nextPageUrl,
    setPreviousPageUrl,
    previousPageUrl,
    characters,
    setCurrentPageNumber,
    currentPageNumber,
    setUrl,
    url,
}) => {
    // const pageNumbers = Math.ceil(characters.length / 10);\
    console.log(url);
    const previousPage = () => {
        if (currentPageNumber > 1) {
            setCurrentPageNumber(currentPageNumber - 1);
            setUrl(`https://swapi.dev/api/people/?page=${currentPageNumber}`);
            console.log(url);
        }
    };

    const nextPage = () => {
        setCurrentPageNumber(currentPageNumber + 1);
        setUrl(`https://swapi.dev/api/people/?page=${currentPageNumber}`);
        console.log(url);
    };

    return (
        <div>
            <button onClick={previousPage}>Previous</button>
            {/* <span>{pageNumbers}</span> */}

            <span>{currentPageNumber}</span>
            <button onClick={nextPage}>Next</button>
        </div>
    );
};

export default Pagination;
