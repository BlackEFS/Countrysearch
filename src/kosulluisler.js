import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [isim, setIsim] = useState("");
  const [girisYapildi, setGirisYapildi] = useState(false);

  const [hataMesaji, setHataMesaji] = useState("");

  const handleChange = (e) => setIsim(e.target.value);

  const handleSubmit = (isim) => {
    if (isim.length < 6) {
      setHataMesaji("Kullanıcı ismi en az 6 karakter olmalıdır..");
    } else {
      setHataMesaji("");
      setGirisYapildi(true);
    }
  };
  return (
    <div className="App">
      <h1>React Dersleri</h1>
      {girisYapildi ? (
        <React.Fragment>
          <h2>Hoşgeldiniz {isim}</h2>

          <button className="btn" onClick={() => setGirisYapildi(false)}>Çıkış yap</button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <input
            className="input"
            name="isim"
            placeholder="İsminiz"
            value={isim}
            onChange={handleChange}
          />
          <button className="btn" onClick={() => handleSubmit(isim)}>
            {" "}
            Giriş
          </button>
          <br />
          <br />
          {hataMesaji ? <h4>{hataMesaji}</h4> : <h2>Giriş Yapınız</h2>}
        </React.Fragment>
      )}
    </div>
  );
}

// 6 karakterden fazlaysa giriş yapılmış olacak
