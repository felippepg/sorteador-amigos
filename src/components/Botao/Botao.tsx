import styled from 'styled-components';
interface FontSizeProps {
  fontSize?: string;
}

export const Botao = styled.button<FontSizeProps>`
  background-color: rgba(254, 101, 43, 1);
  color: white;
  padding: 0.5em;
  border-radius: 60px;
  font-size: 25px;
  margin-top: 0.5em;
  cursor: pointer;
  display: flex;
  width: fit-content;
  align-items: center;

  @media (max-width: 700px) {
    font-size: ${(props) => props.fontSize || '1.5em'};
  }
`;
