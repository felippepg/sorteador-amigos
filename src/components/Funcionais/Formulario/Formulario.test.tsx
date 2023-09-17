import { act, fireEvent, render, screen } from '@testing-library/react';
import Formulario from './Formulario';
import { RecoilRoot } from 'recoil';

describe('Comportamento do Formulario.tsx', () => {
  test('Deveria não salvar um amigo caso o input esteja vazio', async () => {
    //cenário
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    //configurações do teste
    const input = await screen.findByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const button = screen.getByRole('button');

    //resultados
    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test('Deveria adicionar participante caso exista um participante preenchido', async () => {
    //cenário
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    //configurações do teste
    const input = await screen.findByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const button = screen.getByRole('button');
    //inserir conteudo no input
    fireEvent.change(input, {
      target: {
        value: 'João Silva',
      },
    });
    //submeter valor
    fireEvent.click(button);
    //Esperar que o input tenha foco
    expect(input).toHaveFocus();
    //Esperar que o input esteja vazio
    expect(input).toHaveValue('');
  });

  test('Deveria não permitir cadastrar dois participantes com o mesmo nome', async () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = await screen.findByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const button = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'João Silva',
      },
    });
    fireEvent.click(button);

    fireEvent.change(input, {
      target: {
        value: 'João Silva',
      },
    });
    fireEvent.click(button);

    const mensagemDeErro = screen.getByRole('alert');
    expect(mensagemDeErro.textContent).toBe(
      'Não é possivel cadastrar nomes repetidos!'
    );
  });

  test('Deveria remover mensagem de erro após timers', async () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = await screen.findByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const button = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'João Silva',
      },
    });
    fireEvent.click(button);

    fireEvent.change(input, {
      target: {
        value: 'João Silva',
      },
    });
    fireEvent.click(button);

    let mensagemDeErro = screen.queryByRole('alert');
    expect(mensagemDeErro).toBeInTheDocument();
    act(() => {
      jest.runAllTimers();
    });
    mensagemDeErro = screen.queryByRole('alert');
    expect(mensagemDeErro).toBeNull();
  });
});
