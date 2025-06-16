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
  const estaLogado = true;

  return (
    <div>
      {estaLogado ? <h1>Bem-vindo de volta!</h1> : <h1>Por favor, faça login.</h1>}
    </div>
  );
}

export default Home;