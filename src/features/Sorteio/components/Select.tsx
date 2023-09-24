import styled from 'styled-components';

export const Select = styled.select`
  width: 100%;
  padding: 1em;
  border-radius: 60px;

  @media (max-width: 576px) {
    border-radius: 60px;
    font-size: 14px;
    width: 100%;
    padding: 0.2em;
    height: 40px;
  }
`;
