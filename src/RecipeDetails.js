import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const RecipeDetails = () => {

    const { id }=useParams()
    const {data: recipe ,isLoading,error} = useFetch('http://localhost:8000/recipes/'+id);
    const history= useHistory();
    const handleClick=()=>{
            fetch('http://localhost:8000/recipes/'+recipe.id, {
                method: 'DELETE'
            }).then(()=>{
                history.push('/');
            })
    }

    return ( 
        <div className="recipe-details">
           {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {recipe && (
                <article>
                    <h2>{recipe.title}</h2>
                    <p>Written by: {recipe.author}</p>
                    <p>Minutes: {recipe.minutes}</p>
                    <div>Ingredients: {recipe.ingredients}</div>
                    <div>{recipe.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
            </div>
     );
}
 
export default RecipeDetails;