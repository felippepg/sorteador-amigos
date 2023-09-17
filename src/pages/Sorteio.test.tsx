import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Sorteio from './Sorteio';
import { useListaParticipantes } from '../state/hooks/useListaParticipantes';

jest.mock('../state/hooks/useListaParticipantes', () => {
  return {
    useListaParticipantes: jest.fn(),
  };
});

describe('Na página de sortear', () => {
  const participantes = ['nami', 'sanji', 'usopp'];
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
  });
  test('Deveria retornar todos os participantes do sorteio', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );
  });
});
