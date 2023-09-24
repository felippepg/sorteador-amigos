import styled from 'styled-components';
import px2vw from '../../helpers/px2vw';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  width: ${px2vw(720)};

  @media (max-width: 576px) {
    width: ${px2vw(500, 576)};
    font-size: 14px;
    align-items: center;
  }
`;
