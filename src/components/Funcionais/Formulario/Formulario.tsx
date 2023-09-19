import { useRef, useState } from 'react';
import { useAdicionarParticipante } from '../../../state/hooks/useAdicionarParticipante';
import { useMensagemErro } from '../../../state/hooks/useMensagemErro';
import { Form } from '../../Estilizados/Form/Form';
import { SubmitButton } from '../../Estilizados/SubmitButton/SubmitButton';
import { TextField } from '../../Estilizados/TextField/TextField';
import { MensagemErro } from '../../Estilizados/MensagemErro/MensagemErro';
import { Box } from './Box';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const adicionar = useAdicionarParticipante();
  const mensagemErro = useMensagemErro();

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    inputRef.current?.focus();
    setNome('');
    adicionar(nome);
  };

  return (
    <Form onSubmit={adicionarParticipante}>
      <Box>
        <TextField
          ref={inputRef}
          type="text"
          value={nome}
          onChange={(evento: React.ChangeEvent<HTMLInputElement>) =>
            setNome(evento.target.value)
          }
          placeholder="Insira os nomes dos participantes"
        />
        <SubmitButton disabled={!nome} type="submit" value="Adicionar" />
      </Box>

      {mensagemErro && <MensagemErro role="alert">{mensagemErro}</MensagemErro>}
    </Form>
  );
};

export default Formulario;
