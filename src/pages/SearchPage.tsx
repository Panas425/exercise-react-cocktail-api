import { ReactElement, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Ihandler } from "../Interfaces";
import { Button } from "../components/Button";
import { Links } from "../components/Links";
import '../css/SearchPage.css';

export function SearchPage(): ReactElement {
    const { searchResults = [], handleSearch } = useOutletContext<Ihandler>();
    const [query, setQuery] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(0);

    const resultsPerPage = 10; 
    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const onSearchClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setCurrentPage(1); 
        if (handleSearch) {
            handleSearch(query);
        }
    };

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult);

    const totalPages = Math.ceil(searchResults.length / resultsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    value={query}
                    onChange={onSearchChange}
                    placeholder="Search for a cocktail"
                />
                <Button handleButtonClick={onSearchClick} buttonText="Search Result" disabled={false} />
            </div>
                <div className="results-container">
                    {currentResults.map((cocktail, index) => (
                        <div className="cocktail-card" key={index}>
                            <h3>{cocktail.strDrink}</h3>
                            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} width="100" />
                            <br />
                            <Links 
                                path="/seemore" 
                                state={{ cocktail }} 
                                text="See More"
                            />
                        </div>
                    ))}

                    <div className="pagination">
                        <Button 
                            handleButtonClick={handlePreviousPage} 
                            buttonText="Previous" 
                            disabled={currentPage <= 1} 
                        />
                        <span className="page-info">
                            Page {currentPage} of {totalPages}
                        </span>
                        <Button 
                            handleButtonClick={handleNextPage} 
                            buttonText="Next" 
                            disabled={currentPage === totalPages} 
                        />
                    </div>
                </div>
        </>
    );
}
