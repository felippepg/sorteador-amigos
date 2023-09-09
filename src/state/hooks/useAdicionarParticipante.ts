import { useRecoilValue, useSetRecoilState } from 'recoil';
import { erroState, listaParticipantesState } from '../atom';

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParticipantesState);
  const lista = useRecoilValue(listaParticipantesState);
  const setMensagemErro = useSetRecoilState(erroState);

  return (nomeDoParticipante: string) => {
    if (lista.includes(nomeDoParticipante)) {
      setMensagemErro('Não é possivel cadastrar nomes repetidos!');
      setTimeout(() => {
        setMensagemErro('');
      }, 5000);
      return;
    }
    return setLista((listaAtual) => [...listaAtual, nomeDoParticipante]);
  };
};
