import React,{useState} from 'react'
import{v4 as uuidv4} from "uuid"
import Axios from 'axios';// to check the url request running properly
import "./App.css";
import Recipe from './componenets/Recipe';



const App = () => {

   const[query, setQuery]=  useState("");
   const[recipes, setRecipes]=  useState([]);


    const APP_ID ="ba0db9e8";
    const APP_KEY= "4c57d187367540d49d68192ee9aa6cf1";

    const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    //usieng axios to check the flow of url request
const getData =async ()=>{


const result = await Axios.get(url);
setRecipes(result.data.hits)
console.log(result);
setQuery("");

};


const OnChange=(e)=>{

    setQuery(e.target.value)
}

const onSubmit = e =>{

e.preventDefault();
getData();

}


    return (
        <div className="App">
            
                <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                </div>
            
                
            <h1 onClick={getData}>        <img src="http://www.pngmart.com/files/15/Healthy-Food-Plate-PNG.png"
                alt=""/>Food Recipe</h1>
            <form className="search-form" onSubmit={onSubmit}>
            <input type="text" placeholder="search Food" autoComplete="off" onChange={OnChange} value={query}/>
            <input type="submit" value="search"/>
            </form>

            <div className="recipes">
                {recipes!==[]&&recipes.map(recipe=><Recipe key ={uuidv4()} recipe={recipe}/>)



            }</div>



            
        </div>
    )
}

export default App;