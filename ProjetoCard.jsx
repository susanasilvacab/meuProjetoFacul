function ProjetoCard({ projeto }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{projeto.nome}</h3>
      <p>{projeto.descricao}</p>
      <span>{projeto.tecnologia}</span>
    </div>
  );
}

export default ProjetoCard;
