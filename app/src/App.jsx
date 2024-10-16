import { useState } from 'react';
import './App.css';
import './Telas/Telas-CSS/Dormir.css';
import './Telas/Telas-CSS/Home.css';
import './Telas/Telas-CSS/Comer.css';
import './Telas/Telas-CSS/Games.css';
import './Telas/Telas-CSS/Cordinha.css';
import Home from './Telas/Home';
import Comer from './Telas/Comer';
import Dormir from './Telas/Dormir';
import Games from './Telas/Games';
import JogoDaVelha from './Telas/Telas-Games/JogoDaVelha';
import JogoDasEmocoes from './Telas/Telas-Games/JogoDasEmocoes';
import JogoDaMemoria from './Telas/Telas-Games/JogoDaMemoria';
import JogoDeSons from './Telas/Telas-Games/JogoDeSons';
import QuebraCabeca from './Telas/Telas-Games/QuebraCabeca';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const gamePages = [
    'games',
    'jogo-da-velha',
    'jogo-das-emocoes',
    'jogo-da-memoria',
    'jogo-de-sons',
    'quebra-cabeca'
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'comer':
        return <Comer onBack={() => setCurrentPage('home')} />;
      case 'dormir':
        return <Dormir onBack={() => setCurrentPage('home')} />;
      case 'games':
        return <Games
          onBack={() => setCurrentPage('home')}
          onGameSelect={setCurrentPage}
          backgroundColor="#8C29C7"
        />;
      case 'jogo-da-velha':
        return (
          <div className="games-container">
            <JogoDaVelha onBack={() => setCurrentPage('games')} />
          </div>
        );
      case 'jogo-das-emocoes':
        return (
          <div className="games-container">
            <JogoDasEmocoes onBack={() => setCurrentPage('games')} />
          </div>
        );
      case 'jogo-da-memoria':
        return (
          <div className="games-container">
            <JogoDaMemoria onBack={() => setCurrentPage('games')} />
          </div>
        );
      case 'jogo-de-sons':
        return (
          <div className="games-container">
            <JogoDeSons onBack={() => setCurrentPage('games')} />
          </div>
        );
      case 'quebra-cabeca':
        return (
          <div className="games-container">
            <QuebraCabeca onBack={() => setCurrentPage('games')} />
          </div>
        );
      default:
        return <Home />;
    }
  };

  return (
    <div className={`tudo-tela ${currentPage === 'home' || currentPage === 'comer' ? 'fundo-padrao' : ''}`}>
      {renderPage()}

      {!gamePages.includes(currentPage) && (
        <div className='nav-buttons'>
          <main>
            <img
              src='./public/Tela-fundo-inicio/Btn-jogos.png'
              alt='Games'
              className='botoes-telas'
              onClick={() => setCurrentPage('games')}
            />
            <img
              src='./public/Tela-fundo-inicio/Btn-comida.png'
              alt='Comer'
              className='botoes-telas'
              onClick={() => setCurrentPage('comer')}
            />
            <img
              src='./public/Tela-fundo-inicio/Btn-chat.png'
              alt='Chat'
              className='botoes-telas'
            />
            <img
              src='./public/Tela-fundo-inicio/Btn-dormir.png'
              alt='Dormir'
              className='botoes-telas'
              onClick={() => setCurrentPage('dormir')}
            />
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
