import React, { useState } from "react";
import "./App.css";



const data=[
  {name:"Enes"},
  {name:"Erhan"},
  {name:"İsa"},
  {name:"Erhan"},
  {name:"Halil"}
]

export default function App() {
 const [users,setUsers]=useState(data);
   return (
    <div className="App">
      <h1>Array(Diziler)</h1>
      <input placeholder="Arama" />
      {users.map((user,index)=>{
        return (
        <User user={user} key={index}/>
          )
      })}
    </div>
  );
}

function User(props) {
  return (
    <div>
        <p>{props.user.name} </p>
    </div>
  )
}

// 6 karakterden fazlaysa giriş yapılmış olacak
