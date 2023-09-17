import Formulario from '../components/Funcionais/Formulario/Formulario';
import { Cabecalho } from '../components/Estilizados/Cabecalho/Cabecalho';
import { Conteudo } from '../components/Estilizados/Conteudo/Conteudo';
import { Fundo } from '../components/Estilizados/Fundo/Fundo';
import { Title } from '../components/Estilizados/Titulo/Titulo';
import ListaParticipantes from '../components/Funcionais/ListaParticipantes/ListaParticipantes';
import Rodape from '../components/Funcionais/Rodape/Rodape';

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
        <Rodape />
      </Conteudo>
    </Fundo>
  );
}

export default Home;
