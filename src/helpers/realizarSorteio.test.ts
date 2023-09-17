import { realizarSorteio } from './realizarSorteio';

describe('Dado um sorteio de amigo secreto', () => {
  test('Deveria sortear um participante com o nome diferente do proprio nome', () => {
    const participantes = ['luffy', 'sanji', 'zoro'];
    //Busco o MAP de amigo secreto
    const sorteio = realizarSorteio(participantes);

    //Percorro meu array de participantes
    participantes.forEach((participante) => {
      //Busco um participante
      const amigoSecreto = sorteio.get(participante);
      //Espero que o participante não seja o seu próprio amigo secreto
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
