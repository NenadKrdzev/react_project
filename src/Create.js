import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

const [title,setTitle]=useState('');
const [body,setBody]=useState('');
const [author,setAuthor]=useState('mario');
const [minutes,setMinutes]=useState('10');
const [ingredients,setIngredients]=useState('');
const [isPending,setIsPending]=useState(false);
const history=useHistory();

const handleSubmit=(e)=>{
    e.preventDefault();
    const recipe={title,body,author,ingredients,minutes};

    setIsPending(true);

   fetch('http://localhost:8000/recipes',{
       method: 'POST',
       headers:{ "Content-Type": "application/json"},
       body: JSON.stringify(recipe)
   }).then(()=>{
       console.log("added");
       setIsPending(false);
     //  history.go(-1);
     history.push('/');
   })
}

    return (  
        <div className="create">
            <h2>Add a new recipe</h2>
            <form onSubmit={handleSubmit}>
                <label >Recipe title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                 <label>Minutes:</label>
                <input 
                type="text"
                required
                value={minutes}
                onChange={(e)=>setMinutes(e.target.value)}
                />
                 <label>Ingredients:</label>
                <textarea
                required
                value={ingredients}
                onChange={(e)=>setIngredients(e.target.value)}
                >
                </textarea>
                 <label >Recipe:</label>
                <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                >
                </textarea>
                <label >Recipe author:</label>
                <input
                type="text"
                required
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                ></input>
               {!isPending && <button>Add recipe</button>}
               {isPending && <button disabled>Adding</button>}
          </form>
            </div>
    );
}
 
export default Create;