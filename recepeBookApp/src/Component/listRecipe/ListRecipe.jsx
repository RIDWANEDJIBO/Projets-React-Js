import "./ListeRecipe.css"
import  MydataComponent   from  '../MydataComponent'

const ListRecipe = () => {

  const {data, isLoading, isError, refetch} = MydataComponent();

  return (
    <>
      {
        data.map((recipe)=>{
          <div className='item_recipe'>
            <div className='recipe_img'><img src={recipe.image} alt={recipe.image} />
            <h3>{recipe.title}</h3>
            <p>
              <strong>Ingrédients: </strong>
              {recipe.extendedIngredients.map((ingredient)=>(ingredient.original).join(","))}
            </p>
            <a href={recipe.sourceUrl}>View Recipe</a>
          </div>          
        </div>
        })
      }
    </>
  )
}

export default ListRecipe
