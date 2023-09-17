import { useNavigate } from 'react-router-dom';
import { useListaParticipantes } from '../../../state/hooks/useListaParticipantes';
import { IniciarBrincadeira } from '../../Estilizados/IniciarBrincadeira/IniciarBrincadeira';
import { Footer } from '../../Estilizados/Footer/Footer';
import { Icon } from '../../Estilizados/Icon/Icon';

const Rodape = () => {
  const listaParticipantes = useListaParticipantes();
  const navegacao = useNavigate();

  return (
    <Footer>
      <IniciarBrincadeira
        onClick={() => navegacao('/sorteio')}
        disabled={listaParticipantes.length < 3}
      >
        <Icon className="material-icons">play_circle_outline</Icon>
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
