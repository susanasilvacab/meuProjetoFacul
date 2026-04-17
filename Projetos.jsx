import ProjetoCard from "./ProjetoCard";

function Projetos() {
  const projetos = [
    {
      id: 1,
      nome: "Sistema de Cadastro",
      descricao: "Sistema em Angular com Spring Boot",
      tecnologia: "Angular + Java",
    },
    {
      id: 2,
      nome: "API de Serviços",
      descricao: "API REST para serviços prestados",
      tecnologia: "Spring Boot",
    },
    {
      id: 3,
      nome: "Portfólio Web",
      descricao: "Meu portfólio pessoal",
      tecnologia: "React",
    },
  ];

  return (
    <section>
      <h2>Meus Projetos</h2>

      {projetos.map((projeto) => (
        <ProjetoCard key={projeto.id} projeto={projeto} />
      ))}
    </section>
  );
}

export default Projetos;
