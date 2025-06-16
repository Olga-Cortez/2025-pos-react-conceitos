"use client";

import React, { Component, useState, useEffect } from 'react';



function Contador() {
  const [contagem, setContagem] = useState(0);

  return (
    <div>
      <p>Você clicou {contagem} vezes</p>
      <button onClick={() => setContagem(contagem + 1)}>Clique aqui</button>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <Contador />
    </div>
  );
}

export default Home;