import React from "react";
import { Container, Logo } from "./styles";
import logo from '../../images/Vector.svg';

const Header = () => {
  return (
    <Container>
      <Logo src={logo}/>
    </Container>
  );
};

export default Header;
