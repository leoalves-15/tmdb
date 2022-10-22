import React from "react";
import { Container, Logo } from "./styles";
import logo from '../../images/Vector.svg';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo src={logo} role="button" onClick={() => navigate('/')}/>
    </Container>
  );
};

export default Header;
