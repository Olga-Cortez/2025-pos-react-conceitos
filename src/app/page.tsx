"use client";

import React, { Component } from 'react';


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
  const itens = ["Item 1", "Item 2", "Item 3"];

  return (
    <ul>
      {itens.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default Home;