import React from 'react';

import {
  InfoContainer,
  Title,
  InfoRow,
  InfoText,
  Overview,
  Button,
  ButtonLabel,
  ButtonIcon
} from './styles';

import Container from '../../components/container';
import Header from '../../components/header';
import MovieImage from '../../components/movieImage';

function Details() {
  return (
    <Container >
      <Header back />
      <MovieImage wide />
      <InfoContainer>
        <Title>The walking dead</Title>
        <InfoRow>
          <InfoText>LANÇADO</InfoText>
          <InfoText white>31 de Outubro de 2010</InfoText>
        </InfoRow>
        <InfoRow>
          <InfoText>PAÍS</InfoText>
          <InfoText white>Estados Unidos</InfoText>
        </InfoRow>
        <InfoRow>
          <InfoText>IDIOMA</InfoText>
          <InfoText white>Inglês</InfoText>
        </InfoRow>
        <InfoRow>
          <InfoText>GÊNEROS</InfoText>
          <InfoText white>Drama, Ação, Aventura, Fantasia, Ficção Ciêntifica</InfoText>
        </InfoRow>
        <Overview>
          O mundo que conhecíamos se foi. Uma epidemia de proporções apocalípticas varreu o mundo, fazendo com que os mortos ressuscitassem e se alimentassem dos vivos. Em questão de meses, a sociedade desmoronou. Em um mundo governado pelos mortos, somos forçados a finalmente começar a viver. Baseado em uma série de quadrinhos de mesmo nome de Robert Kirkman, este projeto da AMC se concentra no mundo após um apocalipse zumbi. A série segue um policial, Rick Grimes, que acorda de um coma e encontra o mundo devastado por zumbis. Procurando por sua família, ele e um grupo de sobreviventes tentam lutar contra os zumbis para permanecerem vivos.
        </Overview>
        <Button>
          <ButtonIcon name="controller-play" />
          <ButtonLabel>TRAILER</ButtonLabel>
        </Button>
      </InfoContainer>
    </Container>
  );
};

export default Details;
