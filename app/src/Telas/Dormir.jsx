import Cordinha from './Cordinha';

const Dormir = ({ onBack }) => {
  return (
    <div>
      <main>
        <img className='capivara-dormir' src="./public/Tela-fundo-inicio/Capivara-img.png" alt="Capivara" />
        <Cordinha />
      </main>
      <button className="back-button" onClick={onBack}>Voltar</button>
    </div>
  );
};

export default Dormir;
