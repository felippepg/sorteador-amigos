import { useNavigate } from 'react-router-dom';
import { useListaParticipantes } from '../../../state/hooks/useListaParticipantes';
import { IniciarBrincadeira } from '../../Estilizados/IniciarBrincadeira/IniciarBrincadeira';
import { Footer } from '../../Estilizados/Footer/Footer';

const Rodape = () => {
  const listaParticipantes = useListaParticipantes();
  const navegacao = useNavigate();

  return (
    <Footer>
      <IniciarBrincadeira
        onClick={() => navegacao('/sorteio')}
        disabled={listaParticipantes.length < 3}
      >
        Iniciar brincadeira!
      </IniciarBrincadeira>

      <img
        src={process.env.PUBLIC_URL + '/sacolas.png'}
        // style={{ marginTop: '55px' }}
        alt="logo sorteador de amigos"
      />
    </Footer>
  );
};

export default Rodape;
