import Formulario from '../components/Funcionais/Formulario/Formulario';
import { Conteudo } from '../components/Estilizados/Conteudo/Conteudo';
import { Fundo } from '../components/Estilizados/Fundo/Fundo';
import { Title } from '../components/Estilizados/Titulo/Titulo';
import ListaParticipantes from '../components/Funcionais/ListaParticipantes/ListaParticipantes';
import Rodape from '../components/Funcionais/Rodape/Rodape';
import Cabecalho from '../components/Estilizados/Cabecalho/Cabecalho';

function Home() {
  return (
    <Fundo>
      <Cabecalho />
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
