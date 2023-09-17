import shuffle from 'just-shuffle';
//realiza o sorteio e retorna um Map com a relação de usuario e seu amigo secreto
export const realizarSorteio = (participantes: string[]) => {
  const embaralhado = shuffle(participantes);
  const resulatdo = new Map<string, string>();
  const numeroParticipantes = participantes.length;

  for (let index = 0; index < numeroParticipantes; index++) {
    let indiceAmigoSecreto = index === numeroParticipantes - 1 ? 0 : index + 1;
    resulatdo.set(embaralhado[index], embaralhado[indiceAmigoSecreto]);
  }

  return resulatdo;
};
