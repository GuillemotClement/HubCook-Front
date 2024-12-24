import {Link} from "react-router";

export default function RecipeCard({recipe}) {

  const { image, name, describ} = recipe;

  return (
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt={name}/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{describ}</p>
          <div className="card-actions justify-end">
            <Link className="btn" to={`/recipes/${recipe.id}`}>Détails</Link>
          </div>
        </div>
      </div>
  )
}