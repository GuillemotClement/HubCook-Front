import {useEffect, useState} from "react";
import RecipeCard from "../../components/Recipe/RecipeCard/RecipeCard.tsx";

export default function RecipePage() {

  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    async function getData() {
      try{
        const response = await fetch('https://127.0.0.1:8000/api/recipes');
        const data = await response.json();
        setRecipeList(data.member);
      } catch (error){
        console.error(`Erreur lors de la récupération des données : ${error}`);
      }
    }
    getData();
  }, [])

  const recipes = recipeList.map(recipe => (
    <RecipeCard key={recipe.id} recipe={recipe}/>
  ))

  return (
      <div className="">
        <h1 className="text-center font-bold text-xl mb-3">Nos recettes</h1>
        <div className="grid grid-cols-5 gap-3">
          { recipes}
        </div>
      </div>
  )
}