import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Rodape from './Rodape';
import { useListaParticipantes } from '../../state/hooks/useListaParticipantes';

jest.mock('../../state/hooks/useListaParticipantes', () => {
  return {
    useListaParticipantes: jest.fn(),
  };
});

describe('Quando o numero de participantes não for suficiente', () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([]);
  });

  test('Deveria desabilitar o botão iniciar brincadeira', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});

describe('Quando o numero de participantes for suficiente', () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([
      'akainu',
      'kizaru',
      'aokiji',
    ]);
  });

  test('Deveria habilitar o botão iniciar brincadeira', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );
    const button = screen.getByRole('button');
    expect(button).toBeEnabled();
  });
});
