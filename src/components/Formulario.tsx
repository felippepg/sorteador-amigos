import { useRef, useState } from 'react';
import { useAdicionarParticipante } from '../state/hooks/useAdicionarParticipante';
import { useMensagemErro } from '../state/hooks/useMensagemErro';

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
    <form onSubmit={adicionarParticipante}>
      <input
        ref={inputRef}
        type="text"
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Insira os nomes dos participantes"
      />
      <button disabled={!nome} />
      {mensagemErro && <p role="alert">{mensagemErro}</p>}
    </form>
  );
};

export default Formulario;
