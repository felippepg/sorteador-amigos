import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
