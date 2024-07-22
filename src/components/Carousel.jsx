
import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  width: 100vw; /* 100% da largura da viewport */
  height: 70vh; /* 50% da altura da viewport */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Evita barras de rolagem se a imagem for maior que a tela */
`;


const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ajusta a imagem para cobrir o contêiner sem distorção */
`;

const ExampleCarouselImage = ({ src, alt }) => {
  return (
    <ImageWrapper>
      <Image src={src} alt={alt} />
    </ImageWrapper>
  );
};

export default ExampleCarouselImage;


