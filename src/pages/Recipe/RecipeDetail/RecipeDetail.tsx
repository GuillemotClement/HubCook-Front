import {useEffect, useState} from "react";
import {useParams} from "react-router";

export default function RecipeDetail() {

  const { id } = useParams();

  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    async function fetchRecipe(){
      const response = await fetch(`https://127.0.0.1:8000/api/recipes/${id}`)
      const data = await response.json();
      // console.log(data);
      setRecipe(data);
    }
    fetchRecipe();
  }, [])

  console.log(recipe);
  return (
    <div className="">
      <img src={recipe.image} alt={recipe.name}/>
      <h1>{recipe.name}</h1>
      <p>{recipe.describ}</p>
    </div>
  )
}