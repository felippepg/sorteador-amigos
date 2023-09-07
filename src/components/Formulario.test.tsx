import { render, screen } from '@testing-library/react';
import Formulario from './Formulario';

test('Deveria não salvar um amigo caso o input esteja vazio', async () => {
  //cenário
  render(<Formulario />);

  //configurações do teste
  const input = await screen.findByPlaceholderText(
    'Insira os nomes dos participantes'
  );
  const button = screen.getByRole('button');

  //resultados
  expect(input).toBeInTheDocument();
  expect(button).toBeDisabled();
});
