import styled from 'styled-components';

export const TextField = styled.input`
  width: 60%;
  border-radius: 60px 0 0 60px;
  height: 62px;
  padding-left: 20px;
  font-size: 1em;
  padding: 0.5em;

  @media (max-width: 576px) {
    border-radius: 60px;
    font-size: 14px;
    width: 100%;
    padding: 0.2em;
    height: 40px;
  }

  &::placeholder {
    text-align: center;
    vertical-align: middle;
    line-height: inherit;
  }
`;
