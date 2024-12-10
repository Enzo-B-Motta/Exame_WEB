import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #000000;
  border-radius: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  color: white;
  list-style-type: none;
  margin: 0;
`;

const NavItem = styled.li`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;  // Aumentando o tamanho da fonte
  padding: 1rem 2rem; // Aumentando o padding
  border: 1px solid white;  
  border-radius: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;  // Adicionando cursor pointer para indicar que é clicável

  &:hover {
    background-color: #555;  // Cor de fundo ao passar o mouse
  }

  a {
    color: white;  // Link com cor branca
    text-decoration: none;
  }

  &:hover a {
    color: white;  // Link branco ao passar o mouse
  }
`;

function Header() {
  return (
    <Container>
      <NavList>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/math">Math</Link></NavItem>
        <NavItem><Link to="/date">Date</Link></NavItem>
        <NavItem><Link to="/array">Array</Link></NavItem>
        <NavItem><Link to="/object">Object</Link></NavItem>
        <NavItem><Link to="/localstorage">LocalStorage</Link></NavItem>
        <NavItem><Link to="/api-fetch">API</Link></NavItem>
      </NavList>
    </Container>
  );
}

export default Header;

