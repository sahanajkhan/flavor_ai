import { useState } from "react";

import API from "../services/api";

export default function Login(){

const [email,setEmail] = useState("");

const [password,setPassword] = useState("");

const login = async()=>{

const res = await API.post(

"/auth/login",

{email,password}

);

localStorage.setItem(

"token",

res.data.token

);

window.location.href ="/home";

};

return(

<div className="flex justify-center items-center h-screen">

<div className="bg-gray-900 p-10 rounded">

<h1 className="text-2xl mb-5">

Login

</h1>

<input

className="p-2 mb-3 text-black"

placeholder="email"

onChange={(e)=>

setEmail(e.target.value)}

/>

<input

type="password"

className="p-2 mb-3 text-black"

placeholder="password"

onChange={(e)=>

setPassword(e.target.value)}

/>

<button

onClick={login}

className="bg-green-500 p-2 w-full">

Login

</button>

</div>

</div>

);

}