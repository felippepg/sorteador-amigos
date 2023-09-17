import { atom } from 'recoil';

//Definindo um estado, tipando e passando sua chave e valor padrão
export const listaParticipantesState = atom<string[]>({
  key: 'listaParticipantesState',
  default: [],
});

export const resultadoAmigoSecreto = atom<Map<string, string>>({
  key: 'resultadoAmigoSecreto',
  default: new Map(),
});

export const erroState = atom<string>({
  key: 'erroState',
  default: '',
});
