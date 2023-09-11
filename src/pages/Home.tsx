import Formulario from '../components/Formulario/Formulario';
import { Cabecalho } from '../components/Cabecalho/Cabecalho';
import { Conteudo } from '../components/Conteudo/Conteudo';
import { Fundo } from '../components/Fundo/Fundo';
import { Title } from '../components/Titulo/Titulo';
import ListaParticipantes from '../components/ListaParticipantes/ListaParticipantes';

function Home() {
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
      <Conteudo>
        <Title>Vamos Começar</Title>
        <Formulario />
        <ListaParticipantes />
      </Conteudo>
    </Fundo>
  );
}

export default Home;
