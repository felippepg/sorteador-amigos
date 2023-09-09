import { atom } from 'recoil';

//Definindo um estado, tipando e passando sua chave e valor padrão
export const listaParticipantesState = atom<string[]>({
  key: 'listaParticipantesState',
  default: [],
});

export const erroState = atom<string>({
  key: 'erroState',
  default: '',
});
