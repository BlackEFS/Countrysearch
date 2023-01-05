import React, { useState } from "react";
import "./App.css";

export default function App() {

  const [form,setForm]=useState({ isim:"",sehir:"", bio:""});

  const [isim, setIsim] = useState("");
  const [sehir, setSehir] = useState("");
  const [bio, setBio] = useState("");

  console.log('Form',form);

  const handleChange=event =>setForm({ ...form,[event.target.name]: event.target.value })

  return (
    <div className="App">
      <h1>Form Dersi</h1>

      <form>
        <input
          value={form.isim}
          onChange={handleChange}
          placeholder="Adınız..."
          name="isim"
        />

        <select
          value={form.sehir}
          onChange={handleChange}
          name="sehir"
        >
          <option value="" disabled >
            Şehir Seçiniz
          </option>
          <option value="ankara">Ankara</option>
          <option value="istanbul">İstanbul</option>
          <option value="izmir">İzmir</option>
          <option value="bursa">Bursa</option>
        </select>

        <textarea
          value={form.bio}
          onChange={handleChange}
          rows="10"
          placeholder="Biyografiniz"
          name="bio"
        ></textarea>

        <button>Gönder</button>
      </form>
    </div>
  );
}
