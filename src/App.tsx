import { Cabecalho } from './components/Cabecalho';
import { Conteudo } from './components/Conteudo';
import { Fundo } from './components/Fundo';

function App() {
  return (
    <Fundo>
      <Cabecalho>
        <img
          src={process.env.PUBLIC_URL + '/logo-pequeno.png'}
          alt="logo sorteador de amigos"
        />
        <div style={{ zIndex: 1 }}>
          <img
            src={process.env.PUBLIC_URL + '/participante.png'}
            style={{ marginTop: '55px' }}
            alt="logo sorteador de amigos"
          />
        </div>
      </Cabecalho>
      <Conteudo />
    </Fundo>
  );
}

export default App;
