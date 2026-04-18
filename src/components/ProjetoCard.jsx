function ProjetoCard({ projeto }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px 0",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{projeto.nome}</h3>
      <p>{projeto.descricao}</p>
      <strong>{projeto.tecnologia}</strong>
    </div>
  );
}

export default ProjetoCard;
