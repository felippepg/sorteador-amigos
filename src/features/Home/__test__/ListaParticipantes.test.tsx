import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import ListaParticipantes from '../components/ListaParticipantes';
import { useListaParticipantes } from '../../../state/hooks/useListaParticipantes';

jest.mock('../../../state/hooks/useListaParticipantes', () => {
  return {
    useListaParticipantes: jest.fn(),
  };
});

describe('Uma lista vazia de participantes', () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([]);
  });

  test('Deveria retornar uma lista vazia de participantes', () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );
    const lista = screen.queryAllByRole('listitem');
    expect(lista).toHaveLength(0);
  });
});

describe('Uma lista preenchida de participantes', () => {
  const participantes = ['Luffy', 'Sanji', 'Zoro'];
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
  });

  test('Deveria retornar uma lista preenchida com os participantes', () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );
    const lista = screen.queryAllByRole('listitem');
    expect(lista).toHaveLength(participantes.length);
  });
});
