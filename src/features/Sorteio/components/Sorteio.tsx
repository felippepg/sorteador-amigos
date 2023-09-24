import { useState } from 'react';
import { Botao } from '../../../components/Botao/Botao';
import { Form } from '../../../components/Form/Form';
import { useListaParticipantes } from '../../../state/hooks/useListaParticipantes';
import { Select } from './Select';
import { useListaAmigoSecreto } from '../../../state/hooks/useListaAmigoSecreto';
import { Icon } from '../../../components/Icon/Icon';
import { Section } from './Section';
import { Span } from './Span';

export const Sorteio = () => {
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
    <Section>
      <Form onSubmit={buscarAmigoSecreto}>
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
          {participantes.map((participante) => (
            <option key={participante}>{participante}</option>
          ))}
        </Select>
        <Span>Clique em em sortear para ver quem é seu amigo secreto!</Span>
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
      <img src={process.env.PUBLIC_URL + '/aviao.png'} alt="avião de papel" />
    </Section>
  );
};
