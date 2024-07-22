import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';
import Nav from 'react-bootstrap/Nav';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px; /* Altura total do header, ajustada para incluir o Navigation */
`;

const Container = styled.header`
  background-color: white;
  color: black;
  border-bottom: 1px solid #1E90FF;
  padding: 1rem;
  height: 200px;
  display: flex;
  align-items: center; /* Centraliza verticalmente */
  position: relative;
`;

const Logo = styled.img`
  width: 500px;
  height: 100px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Logo2 = styled.img`
  width: 500px;
  height: 100px;
`;

const Left = styled.div`
  display: flex;
  justify-content: flex-start; /* Alinha à esquerda */
  flex: 1;
`;

const Navigation = styled.div`
  background-color: #1E90FF;
  border-bottom: 1px solid #1E90FF;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

const StyledNavLink = styled(Nav.Link)`
  margin: 0 20px; /* Espaçamento uniforme entre os links */
  color: white;
  font-weight: bold;
  text-decoration: none;
  
  &:hover {
    color: #FFD700; /* Cor de hover para os links */
  }
  
  &.active {
    border-bottom: 2px solid #FFD700; /* Indicador para o link ativo */
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Left>
          <Logo2 src={logo2} alt="Logo da empresa 2" />
        </Left>
        <Logo src={logo} alt="Logo da empresa" />
      </Container>
      <Navigation>
        <Nav variant="pills">
          <Nav.Item>
            <StyledNavLink href="/home">Início</StyledNavLink>
          </Nav.Item>
          <Nav.Item>
            <StyledNavLink href="/links">Links Úteis</StyledNavLink>
          </Nav.Item>
          <Nav.Item>
            <StyledNavLink href="/localizacao">Localização</StyledNavLink>
          </Nav.Item>
          <Nav.Item>
            <StyledNavLink href="/politica">Política de Privacidade</StyledNavLink>
          </Nav.Item>
          <Nav.Item>
            <StyledNavLink href="/contatos">Fale Conosco</StyledNavLink>
          </Nav.Item>
        </Nav>
      </Navigation>
    </HeaderWrapper>
  );
}

export default Header;









