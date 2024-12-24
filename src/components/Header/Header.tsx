import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKitchenSet} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router";
export default function Header() {
  return (
      <div className="flex justify-between py-3 px-8 shadow-md items-center">
        <div className="gap-x-2 flex items-center">
          <FontAwesomeIcon icon={faKitchenSet} className="text-3xl"/>
          <span className="text-xl font-semibold">HubCook</span>
        </div>
        <div className="">
          <nav>
            <ul className="flex gap-x-2">
              <li><NavLink to="/">Accueil</NavLink></li>
              <li><NavLink to="/recipes">Recettes</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
  )
}