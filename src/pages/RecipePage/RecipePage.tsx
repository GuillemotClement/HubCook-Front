import {useEffect, useState} from "react";

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
    <li key={recipe.id }>
      <img src={recipe.image} alt=""/>
      <h2>{ recipe.name }</h2>
    </li>
  ))

  return (
      <div className="">
        <h1>Nos recettes</h1>
        <div className="">
          { recipes}
        </div>
      </div>
  )
}