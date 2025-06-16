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
	return (
		<div>
			<main>
				<Titulo />
        <Saudacao nome="Minora" />
        <Saudacao nome="Alunos" />
        <SaudacaoComClass nome="professor e alunos" />
			</main>
		</div>
	);
}

export default Home;