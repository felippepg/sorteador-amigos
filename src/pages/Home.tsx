import Cabecalho from '../components/Cabecalho/Cabecalho';
import { Conteudo } from '../components/Conteudo/Conteudo';
import { Fundo } from '../components/Fundo/Fundo';
import { Title } from '../components/Titulo/Titulo';
import Formulario from '../features/Home/components/Formulario/Formulario';
import ListaParticipantes from '../features/Home/components/ListaParticipantes';
import Rodape from '../features/Home/components/Rodape/Rodape';

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
