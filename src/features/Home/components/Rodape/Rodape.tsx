import { useNavigate } from 'react-router-dom';
import { useListaParticipantes } from '../../../../state/hooks/useListaParticipantes';
import { Botao } from '../../../../components/Botao/Botao';
import { useSortearAmigoSecreto } from '../../../../state/hooks/useSortearAmigoSecreto';
import { Footer } from './Footer';
import { ImageSacola } from '../../../../components/Img/Img';
import { Icon } from '../../../../components/Icon/Icon';

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
