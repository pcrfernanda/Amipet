import React from 'react';

const JogoDaMemoria = ({ onBack, backgroundColor = 'black' }) => {
  return (
    <div className="jogo-da-memoria-container" style={{ backgroundColor }}>
      
      <button className="back-button" onClick={onBack}>Voltar</button>
    </div>
  );
};

export default JogoDaMemoria;
