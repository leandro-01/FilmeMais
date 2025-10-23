import React from "react";
import "./App.css";

function FilmeMais() {
  const filmes = [
    {
      id: 1,
      titulo: "O Poderoso Chefão",
      descricao:
        "A saga da família Corleone, uma poderosa máfia italiana em Nova York.",
      imagem:
        "https://m.media-amazon.com/images/I/71xBLRBYOiL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 2,
      titulo: "Interestelar",
      descricao:
        "Um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade.",
      imagem:
        "https://m.media-amazon.com/images/I/71nDPy4c7XL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 3,
      titulo: "Vingadores: Ultimato",
      descricao:
        "Os heróis mais poderosos da Terra se unem para derrotar Thanos e restaurar o universo.",
      imagem:
        "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 4,
      titulo: "Coringa",
      descricao:
        "A origem do icônico vilão de Gotham em uma história intensa e perturbadora.",
      imagem:
        "https://m.media-amazon.com/images/I/71JxqSxNKFL._AC_UF894,1000_QL80_.jpg",
    },
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>🎥 FilmeMais</h1>
        <p>Seu catálogo de filmes favorito</p>
      </header>

      <main className="lista-filmes">
        {filmes.map((filme) => (
          <div key={filme.id} className="card-filme">
            <img src={filme.imagem} alt={filme.titulo} />
            <h2>{filme.titulo}</h2>
            <p>{filme.descricao}</p>
          </div>
        ))}
      </main>

      <footer className="footer">
        feito com 💙 por Leandro
      </footer>
    </div>
  );
}

export default FilmeMais;