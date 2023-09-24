import { useListaParticipantes } from '../../../state/hooks/useListaParticipantes';

const ListaParticipantes = () => {
  const listaParticipantes = useListaParticipantes();
  return (
    <ul style={{ listStyle: 'none' }}>
      {listaParticipantes.map((participante) => (
        <li style={{ fontSize: '20px' }} key={participante}>
          {participante}
        </li>
      ))}
    </ul>
  );
};

export default ListaParticipantes;
