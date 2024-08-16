import { ReactElement, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Cocktail } from "../Interfaces";

import '../css/SeeMorePage.css'

export function SeeMorePage(): ReactElement {
    const location = useLocation();
    const [cocktail, setCocktail] = useState<Cocktail | null>(null);

    useEffect(() => {
      if (location.state && location.state.cocktail) {
          setCocktail(location.state.cocktail);
      }
  }, [location.state]);


    const renderIngredients = () => {
        const ingredients = [];

        if (cocktail) {
            for (let i = 1; i <= 15; i++) {
                const ingredient = cocktail[`strIngredient${i}` as keyof typeof cocktail];
                const measurement = cocktail[`strMeasure${i}` as keyof typeof cocktail];

                if (ingredient) {
                    ingredients.push(
                        <li key={i}>
                            {measurement ? `${measurement} ` : ''}{ingredient}
                        </li>
                    );
                }
            }
        }
        return ingredients.length > 0 ? <ul>{ingredients}</ul> : <p>No ingredients available.</p>;
    };

    return (
        <div className="seemore-container">
            {cocktail && (
                <div>
                    <h2>{cocktail.strDrink}</h2>
                    <p><strong>Category:</strong> {cocktail.strCategory}</p>
                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} width="200" />
                    {cocktail.strTags && (
                        <p><strong>Tags:</strong> {cocktail.strTags.split(',').map(tag => <span key={tag}>{tag}</span>)}</p>
                    )}
                    <h3>Ingredients and Measurements:</h3>
                    {renderIngredients()}
                    <p><strong>Glass:</strong> {cocktail.strGlass}</p>
                </div>
            )}
        </div>
    );
}
