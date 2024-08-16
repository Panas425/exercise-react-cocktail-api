import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./components";
import { RandomCocktailPage } from "./pages/RandomCocktailPage";
import { SearchPage } from "./pages/SearchPage";
import { SeeMorePage } from "./pages/SeeMorePage";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<RandomCocktailPage />} />
        <Route path="random" element={<RandomCocktailPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="seemore" element={<SeeMorePage />} />
      </Route>
    )
  );