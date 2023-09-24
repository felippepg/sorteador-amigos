import styled from 'styled-components';

interface ImageProps {
  margintop?: string; // Defina como opcional com o "?"
}

export const ImageContainer = styled.div`
  z-index: 1;
  max-width: 470px;
  height: auto;
  box-sizing: border-box;

  @media (max-width: 700px) {
    max-width: 328px;
    height: 200px;
  }
`;

export const ImageSacola = styled.img`
  @media (max-width: 700px) {
    max-width: 120px;
    height: 98px;
  }
`;

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: auto;
  margin-top: ${(props) => props.margintop || 0};

  @media (max-width: 700px) {
    max-width: 328px;
    height: 165px;
    margin-top: 0;
  }
`;

export const ImageLogoContainer = styled.div`
  @media (max-width: 700px) {
    width: 186px;
    height: auto;
    display: flex;
    align-items: center;
  }
`;
