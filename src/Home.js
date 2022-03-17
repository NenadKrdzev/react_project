import { useState, useEffect} from 'react';
import RecipeList from './RecipeList';
import useFetch from './useFetch';
 
const Home = () => {
  
    const {data:recipes ,isLoading,error}=useFetch('http://localhost:8000/recipes');

    return ( 
    <div className="home">
      {error && <div>{error}</div>}
      { isLoading && <div>Loading...</div>}
      {recipes && <RecipeList recipes={recipes} title="All Recipes" />}
      {/* <RecipeList recipes={recipes.filter((recipes)=>recipes.author === 'mario')} title="Mario's recipes" handleDelete={handleDelete}/>  */}
    </div> );
}
 
export default Home;