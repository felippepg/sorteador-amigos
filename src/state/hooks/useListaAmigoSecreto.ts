import { useRecoilValue } from 'recoil';
import { resultadoAmigoSecreto } from '../atom';

export const useListaAmigoSecreto = () => {
  return useRecoilValue(resultadoAmigoSecreto);
};
