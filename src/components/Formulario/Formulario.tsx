import { useRef, useState } from 'react';
import { useAdicionarParticipante } from '../../state/hooks/useAdicionarParticipante';
import { useMensagemErro } from '../../state/hooks/useMensagemErro';
import { Form } from '../Form/Form';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import { TextField } from '../TextField/TextField';
import { MensagemErro } from '../MensagemErro/MensagemErro';

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
      <div style={{ display: 'flex' }}>
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
      </div>

      {mensagemErro && <MensagemErro role="alert">{mensagemErro}</MensagemErro>}
    </Form>
  );
};

export default Formulario;
