import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  return (
    <div
      onClick={() => {
        console.log("App Div tıklandı..");
      }}
      className="App"
    >
      <h1>React Dersleri</h1>
      <form onSubmit={(e)=>{
        e.preventDefault();
        console.log("Form Gönderildi")
      }}>
        Isim:{"  "}
        <input
          name="isim"
          onFocus={()=>{
            console.log("imlec inputun içinde")
          }}
          onChange={(e) =>
            console.log("Birşey yazıldı", e.target.value, e.target.name)
          }
        />
      </form>
    </div>
  );
}
