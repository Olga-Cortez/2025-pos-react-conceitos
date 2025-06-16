"use client";

function Titulo(props) {
  return <h1>React - conceitos básicos</h1>;
}

const Saudacao = ({ nome }) => {
  return <h2>Olá, {nome}!</h2>;
}

const Home = () => {
  return (
    <div>
			<main>
				<Titulo />
        <Saudacao nome="Professor" />
        <Saudacao nome="Alunos" />
			</main>
    </div>
  );
}