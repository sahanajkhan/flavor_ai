import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function Home(){

const [ingredients, setIngredients] = useState("");
const [recipe, setRecipe] = useState("");

const generate = async () => {

  try {

    console.log("Button clicked"); // DEBUG

    const res = await API.post(
      "/recipe/generate",
      { ingredients }
    );

    console.log(res.data); // DEBUG

    setRecipe(res.data.recipe);

  } catch (error) {

    console.log("ERROR:", error);

  }

};

return(

<div>

<Navbar/>

<div className="p-10">

<input
  className="p-3 text-black"
  placeholder="Enter ingredients"
  value={ingredients}
  onChange={(e)=>setIngredients(e.target.value)}
/>

<button
  onClick={generate}
  className="bg-blue-500 p-3 ml-3"
>
Generate
</button>

<pre className="mt-5">
{recipe}
</pre>

</div>

</div>

);

}