import React from 'react';

function Home({ onBolaClick }) {
  return (
    <div className="home-container">
      <main className='home-meio'>
        <main className='div-bola'>
          <img
            className="bola"
            src="./public/Tela-fundo-inicio/Bola-fundo-jogos.png"
            alt="Bola"
            onClick={onBolaClick}
          />
        </main>
        <img
          className="capivara-home"
          src="./public/Tela-fundo-inicio/Capivara-img.png"
          alt="Capivara"
        />
      </main>
    </div>
  );
}

export default Home;
