import React from 'react';

const JogoDasEmocoes = ({ onBack, backgroundColor = 'black' }) => {
  return (
    <div className="jogo-das-emocoes-container" style={{ backgroundColor }}>
      
      <button className="back-button" onClick={onBack}>Voltar</button>
    </div>
  );
};

export default JogoDasEmocoes;
