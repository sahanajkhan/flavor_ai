import { Link } from "react-router-dom";

export default function Navbar(){

return(

<div className="flex justify-between p-4 bg-gray-900">

<h1 className="text-2xl font-bold">

FlavorAI 🍳

</h1>

<div>

<Link to="/home" className="mr-4">

Home

</Link>

<Link to="/favorites">

Favorites

</Link>

</div>

</div>

);

}