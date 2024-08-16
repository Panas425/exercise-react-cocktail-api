type IngredientFields = `strIngredient${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15}`;
type MeasureFields = `strMeasure${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15}`;

export interface Ihandler {
  handleRandom: () => void;
  handleSearch: (query: string) => void;
  searchResults?: Cocktail[];
  cocktail: Cocktail | null;
}

export interface ICocktail {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strInstructions: string;
  strDrinkThumb: string;
  strTags: string;
  strGlass: string;
}

export type Cocktail = ICocktail & Partial<Record<IngredientFields | MeasureFields, string | null>>;