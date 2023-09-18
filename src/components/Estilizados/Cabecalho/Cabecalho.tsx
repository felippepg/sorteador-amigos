import { Header } from '../Header/Header';

const Cabecalho = () => {
  return (
    <Header>
      <img
        src={process.env.PUBLIC_URL + '/logo-pequeno.png'}
        alt="logo sorteador de amigos"
      />
      <div style={{ zIndex: 1 }}>
        <img
          src={process.env.PUBLIC_URL + '/participante.png'}
          style={{ marginTop: '55px' }}
          alt="logo participante"
        />
      </div>
    </Header>
  );
};

export default Cabecalho;
