import React from 'react';

const JogoDeSons = ({ onBack, backgroundColor = 'black' }) => {
  return (
    <div className="jogo-de-sons-container" style={{ backgroundColor }}>
      
      <button className="back-button" onClick={onBack}>Voltar</button>
    </div>
  );
};

export default JogoDeSons;
