import { useNavigate } from 'react-router-dom';
import { useListaParticipantes } from '../../../state/hooks/useListaParticipantes';
import { Botao } from '../../Estilizados/Botao/Botao';
import { Footer } from '../../Estilizados/Footer/Footer';
import { Icon } from '../../Estilizados/Icon/Icon';
import { useSortearAmigoSecreto } from '../../../state/hooks/useSortearAmigoSecreto';
import { Image, ImageSacola } from '../Formulario/Img';

const Rodape = () => {
  const listaParticipantes = useListaParticipantes();
  const navegacao = useNavigate();
  const sortear = useSortearAmigoSecreto();

  return (
    <Footer>
      <Botao
        fontSize="20px"
        onClick={() => {
          navegacao('/sorteio');
          sortear();
        }}
        disabled={listaParticipantes.length < 3}
      >
        <Icon className="material-icons">play_circle_outline</Icon>
        Iniciar brincadeira!
      </Botao>

      <ImageSacola
        src={process.env.PUBLIC_URL + '/sacolas.png'}
        alt="logo sorteador de amigos"
      />
    </Footer>
  );
};

export default Rodape;
