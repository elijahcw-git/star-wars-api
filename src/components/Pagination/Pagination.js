import { Button } from "react-bootstrap";
import "./Pagination.css";

const Pagination = ({
    characters,
    setCurrentPageNumber,
    currentPageNumber,
    setUrl,
    nextPageUrl,
    previousPageUrl,
    isLoading,
    setIsLoading,
}) => {
    const hasPreviousPage = currentPageNumber > 1;
    const hasNextPage = characters.length >= 10;

    const previousPage = () => {
        if (previousPageUrl) {
            setUrl(previousPageUrl);
            setCurrentPageNumber(currentPageNumber - 1);
        }
    };
    const nextPage = () => {
        if (nextPageUrl && currentPageNumber < 9) {
            setUrl(nextPageUrl);
            setCurrentPageNumber(currentPageNumber + 1);
        }
    };

    const previousButton = hasPreviousPage && (
        <Button
            size="lg"
            variant="light"
            onClick={previousPage}
            disabled={isLoading}
        >
            Prev
        </Button>
    );
    const nextButton = hasNextPage && (
        <Button
            size="lg"
            variant="light"
            disabled={isLoading}
            onClick={nextPage}
        >
            Next
        </Button>
    );

    return (
        <div className="pagination-bar">
            <span className="previous-button">{previousButton}</span>
            <span className="page-number">Page: {currentPageNumber}</span>
            <span className="next-button">{nextButton}</span>
        </div>
    );
};

export default Pagination;
