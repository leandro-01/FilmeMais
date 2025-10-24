import React from 'react';

export default function FilmeCard({ filme }) {
  return (
    <div className="filme-card">
      <img src={filme.imagem} alt={filme.titulo} />
      <h3>{filme.titulo}</h3>
      <p>{filme.genero}</p>
      <span className="avaliacao">⭐ {filme.avaliacao}</span>
    </div>
  );
}
