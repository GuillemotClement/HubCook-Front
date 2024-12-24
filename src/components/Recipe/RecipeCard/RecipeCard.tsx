export default function RecipeCard({recipe}) {

  const { image, name, describ} = recipe;

  return (
      <div className="rounded-md shadow overflow-hidden hover:shadow-xl">
        <img src={image} alt={name}/>
        <div className="px-2 flex flex-col">
          <h2 className="text-center font-semibold my-2 text-lg">{name}</h2>
          <p>{describ}</p>
        </div>
      </div>
  )
}