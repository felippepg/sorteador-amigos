import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
