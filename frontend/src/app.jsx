import React from 'react';
import FilmeCard from './FilmeCard';
import { filmes } from './filmes';

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🎬 FilmeMais</h1>
        <p>Seu catálogo de filmes favoritos</p>
      </header>

      <main className="conteudo">
        <h2>Catálogo</h2>
        <div className="lista-filmes">
          {filmes.map((filme) => (
            <FilmeCard key={filme.id} filme={filme} />
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>feito com 💙 por Leandro</p>
      </footer>
    </div>
  );
}
