import React from 'react';

const JogoDaVelha = ({ onBack, backgroundColor = 'black' }) => {
  return (
    <div className="jogo-da-velha-container" style={{ backgroundColor }}>
      
      <button className="back-button" onClick={onBack}>Voltar</button>
    </div>
  );
};

export default JogoDaVelha;
