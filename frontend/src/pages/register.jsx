import { useState } from "react";

import API from "../services/api";

export default function Register(){

const [email,setEmail] = useState("");

const [password,setPassword] = useState("");

const register = async()=>{

await API.post(

"/auth/register",

{email,password}

);

window.location="/";

};

return(

<div className="flex justify-center items-center h-screen">

<div className="bg-gray-900 p-10">

<h1>Register</h1>

<input

className="text-black"

onChange={(e)=>

setEmail(e.target.value)}

/>

<input

className="text-black"

type="password"

onChange={(e)=>

setPassword(e.target.value)}

/>

<button

onClick={register}

className="bg-green-500 p-2">

Register

</button>

</div>

</div>

);

}