import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 700px) {
    flex-direction: column;
    height: 50vh;
  }
`;
