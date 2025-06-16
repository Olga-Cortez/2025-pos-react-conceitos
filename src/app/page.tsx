"use client";

import React, { Component, useState } from 'react';



interface SaudacaoProps {
    nome: string;
  }
  
function Titulo(props) {
  return <h1 className='titulo'>React - conceitos básicos</h1>;
}

const Saudacao: React.FC<SaudacaoProps> = ({nome}) => {
  return <h2>Olá, {nome}!</h2>;
}

class SaudacaoComClass extends React.Component<SaudacaoProps> {
  render() {
    const { nome } = this.props;
    return <h2>Olá, {nome}!</h2>;
  }
}

const Home = () => {
  const [contagem, setContagem] = useState(0);

  return (
    <div>
      <p>Você clicou {contagem} vezes</p>
      <button onClick={() => setContagem(contagem + 1)}>Clique aqui</button>
    </div>
  );
}

export default Home;