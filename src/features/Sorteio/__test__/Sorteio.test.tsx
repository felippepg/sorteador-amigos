import { render, screen, fireEvent } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useListaParticipantes } from '../../../state/hooks/useListaParticipantes';
import { useListaAmigoSecreto } from '../../../state/hooks/useListaAmigoSecreto';
import { Sorteio } from '../components/Sorteio';

jest.mock('../../../state/hooks/useListaParticipantes', () => {
  return {
    useListaParticipantes: jest.fn(),
  };
});

jest.mock('../../../state/hooks/useListaAmigoSecreto', () => {
  return {
    useListaAmigoSecreto: jest.fn(),
  };
});

describe('Na página de sortear', () => {
  const participantes = ['nami', 'sanji', 'usopp'];
  const resultado = new Map([
    ['nami', 'sanji'],
    ['sanji', 'usopp'],
    ['usopp', 'nami'],
  ]);

  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
    (useListaAmigoSecreto as jest.Mock).mockReturnValue(resultado);
  });

  test('Deveria retornar todos os participantes do sorteio', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const opcoes = screen.queryAllByRole('option');
    expect(opcoes).toHaveLength(participantes.length + 1);
  });

  test('Deveria exibir o amigo secreto do usuario', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText('Selecione seu nome');

    fireEvent.change(select, {
      target: {
        value: participantes[0],
      },
    });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const amigoSecreto = screen.getByRole('alert');

    expect(amigoSecreto).toBeInTheDocument();
  });
});
