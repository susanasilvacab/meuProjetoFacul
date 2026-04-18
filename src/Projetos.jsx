import ProjetoCard from "./ProjetoCard";
import projetos from "../data/projetos.json";

function Projetos() {
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
