import { Image, ImageContainer, ImageLogoContainer } from '../Img/Img';
import { Header } from '../Header/Header';

const Cabecalho = () => {
  return (
    <Header>
      <div
        style={{ marginTop: '12vh', display: 'flex', justifyContent: 'center' }}
      >
        <ImageLogoContainer>
          <Image
            src={process.env.PUBLIC_URL + '/logo-pequeno.png'}
            alt="logo sorteador de amigos"
          />
        </ImageLogoContainer>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ImageContainer>
          <Image
            src={process.env.PUBLIC_URL + '/participante.png'}
            margintop="5vh"
            alt="logo participante"
          />
        </ImageContainer>
      </div>
    </Header>
  );
};

export default Cabecalho;
