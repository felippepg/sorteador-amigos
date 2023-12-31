import styled from 'styled-components';

export const SubmitButton = styled.input`
  background-color: rgba(196, 196, 196, 1);
  color: black;
  width: 40%;
  border-radius: 0 60px 60px 0;
  cursor: pointer;
  font-size: 1em;

  @media (max-width: 576px) {
    border-radius: 60px;
    padding: 0.5em;
    margin-top: 0.5em;
  }
`;
