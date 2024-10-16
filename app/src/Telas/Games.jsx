import React from 'react';

const Games = ({ onBack, onGameSelect, backgroundColor = 'white' }) => {
  return (
    <div className="games-container" style={{ backgroundColor }}>
      <main className='botoes-jogos'>
        <div className="square" onClick={() => onGameSelect('jogo-da-velha')}>
          <main className='square-dentro' style={{ cursor: 'pointer' }}>
            <p>Jogo da Velha</p>
            <img src="./public/Tela-jogos/Jogo-da-velha.png" alt="Jogo da Velha" />
          </main>
        </div>
        <div className="square" onClick={() => onGameSelect('jogo-das-emocoes')}>
          <main className='square-dentro' style={{ cursor: 'pointer' }}>
            <p>Jogo das Emoções</p>
            <img src="./public/Tela-jogos/Jogo-emocoes.png" alt="Jogo das Emoções" />
          </main>
        </div>
        <div className="square" onClick={() => onGameSelect('jogo-da-memoria')}>
          <main className='square-dentro' style={{ cursor: 'pointer' }}>
            <p>Jogo da Memória</p>
            <img src="./public/Tela-jogos/Jogo-memoria.png" alt="Jogo da Memória" />
          </main>
        </div>
        <div className="square" onClick={() => onGameSelect('jogo-de-sons')}>
          <main className='square-dentro' style={{ cursor: 'pointer' }}>
            <p>Jogo de sons</p>
            <img src="./public/Tela-jogos/Jogo-sons.png" alt="Jogo de Sons" />
          </main>
        </div>
        <div className="square" onClick={() => onGameSelect('quebra-cabeca')}>
          <main className='square-dentro' style={{ cursor: 'pointer' }}>
            <p>Quebra-cabeça</p>
            <img src="./public/Tela-jogos/Quebra-cabeca.png" alt="Quebra-cabeça" />
          </main>
        </div>
      </main>
      <button className="back-button" onClick={onBack}>Voltar</button>
    </div>
  );
};

export default Games;
