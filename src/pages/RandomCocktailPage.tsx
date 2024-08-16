import { ReactElement } from "react";
import { Button } from "../components/Button";
import { useOutletContext } from "react-router-dom";
import { Ihandler } from "../Interfaces";
import { Links } from "../components/Links";

import '../css/RandomCocktailPage.css'

export function RandomCocktailPage(): ReactElement {
    const {handleRandom, cocktail} = useOutletContext<Ihandler>();
    return(
        <>
        <div className="random-container">
        <div>
        {cocktail && (
        <div>
          <h2>{cocktail.strDrink}</h2>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} width="200" />
          <p><strong>Category:</strong> {cocktail.strCategory}</p>
          <Links 
                            path="/seemore" 
                            state={{cocktail}} 
                            text="See More"
                            />
        </div>
        )}
        <div className="button-div">
        <Button buttonText="Random Cocktail" handleButtonClick={handleRandom} disabled={false}></Button>
        </div>

        </div>
        </div>
        </>
    );
}