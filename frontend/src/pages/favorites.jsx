import { useEffect,useState }

from "react";

import API from "../services/api";

export default function Favorites(){

const [favorites,setFavorites]
=useState([]);

useEffect(()=>{

API.get("/recipe/favorite")

.then(res=>

setFavorites(res.data));

},[]);

return(

<div>

<h1>Favorites</h1>

{

favorites.map((f,i)=>(

<div key={i}>

{f}

</div>

))

}

</div>

);

}