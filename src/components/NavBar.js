import React from 'react'
import styled from "styled-components";

const NavBar = () => {
  const Header = styled.header`
    background-color:grey;
    height:100px;
  `;



  return (
    <Header>
      <a href="">Lista de Personajes</a>
      <a href="">Agregar Personajes</a>
    </Header>
  );
}

export default NavBar