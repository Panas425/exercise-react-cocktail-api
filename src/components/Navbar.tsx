import { ReactElement } from "react";
import { Links } from "../components/Links";

export function Navbar(): ReactElement {
    return (
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Links path="random" text="Random Cocktail"></Links>
            </li>
            <li className="navbar-item">
              <Links path="search" text="Search Cocktail"></Links>
            </li>
          </ul>
        </nav>
      );
}