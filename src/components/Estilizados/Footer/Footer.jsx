import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: 'black';
  width: 720px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    width: auto;
  }
`;
//backgroundColor: 'black', width: '720px', display: 'flex'
