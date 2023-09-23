import { Botao } from '../components/Estilizados/Botao/Botao';
import Cabecalho from '../components/Estilizados/Cabecalho/Cabecalho';
import { Conteudo } from '../components/Estilizados/Conteudo/Conteudo';
import { Form } from '../components/Estilizados/Form/Form';
import { Fundo } from '../components/Estilizados/Fundo/Fundo';
import { Icon } from '../components/Estilizados/Icon/Icon';
import { Select } from '../components/Estilizados/Select/Select';
import { Title } from '../components/Estilizados/Titulo/Titulo';
import { useListaAmigoSecreto } from '../state/hooks/useListaAmigoSecreto';
import { useListaParticipantes } from '../state/hooks/useListaParticipantes';
import { useState } from 'react';

const Sorteio = () => {
  const participantes = useListaParticipantes();

  const [usuario, setUsuario] = useState('');
  const [amigoSecreto, setAmigoSecreto] = useState('');
  const listaAmigoSecreto = useListaAmigoSecreto();

  const buscarAmigoSecreto = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (listaAmigoSecreto.has(usuario)) {
      setAmigoSecreto(listaAmigoSecreto.get(usuario)!);
    }
  };

  return (
    <Fundo>
      <Cabecalho />
      <Conteudo>
        <Title>Quem vai tirar o papelzinho?</Title>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Form
            // style={{
            //   display: 'flex',
            //   flexDirection: 'column',
            //   alignItems: 'center',
            //   justifyContent: 'center',
            //   width: '500px',
            // }}
            onSubmit={buscarAmigoSecreto}
          >
            <Select
              required
              name="participante"
              placeholder="Selecione seu nome"
              value={usuario}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                setUsuario(event.target.value)
              }
            >
              <option value="" disabled>
                Selecione seu nome
              </option>{' '}
              {/* Adicione esta opção vazia */}
              {participantes.map((participante) => (
                <option key={participante}>{participante}</option>
              ))}
            </Select>
            {/* <span
              style={{
                fontSize: '20px',
                textAlign: 'center',
                marginTop: '1em',
                marginBottom: '0.5em',
              }}
            >
              Clique em em sortear para ver quem é seu amigo secreto!
            </span> */}
            <Botao>
              <Icon className="material-icons">casino</Icon>
              Sortear
            </Botao>
          </Form>
          {amigoSecreto && (
            <p
              role="alert"
              style={{ color: 'orange', fontSize: '19px', marginTop: '0.5em' }}
            >
              {amigoSecreto}
            </p>
          )}
          <img
            src={process.env.PUBLIC_URL + '/aviao.png'}
            alt="avião de papel"
          />
        </section>
      </Conteudo>
    </Fundo>
  );
};

export default Sorteio;
