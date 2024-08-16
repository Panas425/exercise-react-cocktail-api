import { Outlet } from 'react-router-dom';
import '../css/App.css';
import { Cocktail, Ihandler } from '../Interfaces';
import { useState } from 'react';
import { Navbar } from '../components/Navbar';

export function App() {
  const [searchResults, setSearchResults] = useState<Cocktail[]>([]);
  const [cocktail, setCocktail] = useState<Cocktail | null>(null); // Updated to handle null state

  const handleRandom = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((data) => {
        if (data.drinks && data.drinks.length > 0) {
          setCocktail(data.drinks[0]);
        } else {
          setCocktail(null);
        }
      })
      .catch((error) => {
        console.error('Error fetching random cocktail:', error);
        setCocktail(null);
      });
  };

  const handleSearch = (query: string) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.drinks && Array.isArray(data.drinks)) {
          setSearchResults(data.drinks);
        } else {
          setSearchResults([]);
        }
      })
      .catch((error) => {
        console.error('Error searching cocktails:', error);
        setSearchResults([]);
      });
  };



  const handler: Ihandler = {
    handleRandom,
    cocktail,
    searchResults,
    
    handleSearch,
  };

  return (
    <>
      <Navbar />
      <Outlet context={handler} />
    </>
  );
}
