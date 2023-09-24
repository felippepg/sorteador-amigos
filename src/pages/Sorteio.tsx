import { Sorteio as SorteioComponent } from '../features/Sorteio/components/Sorteio';
import { Fundo } from '../components/Fundo/Fundo';
import Cabecalho from '../components/Cabecalho/Cabecalho';
import { Title } from '../components/Titulo/Titulo';
import { Conteudo } from '../components/Conteudo/Conteudo';
const Sorteio = () => {
  return (
    <Fundo>
      <Cabecalho />
      <Conteudo>
        <Title>Quem vai tirar o papelzinho?</Title>
        <SorteioComponent />
      </Conteudo>
    </Fundo>
  );
};

export default Sorteio;
