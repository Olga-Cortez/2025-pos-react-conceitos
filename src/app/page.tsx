"use client";

import React, { Component, useState, useEffect } from 'react';



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
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('/api/dados')
      .then(response => response.json())
      .then(data => setDados(data));
  }, []);

  return (
    <ul>
      {dados.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default Home;