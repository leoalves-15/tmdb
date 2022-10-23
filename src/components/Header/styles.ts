import styled from "styled-components";
import { colors } from "../../colors/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 56px;
  background-color: ${colors.secondary};
  @media (min-width: 800px) {
    justify-content: flex-start;
    padding: 0 130px;
  }
`;

export const Logo = styled.img`
  display: flex;
  width: 140px;
  height: 19px;
  cursor: pointer;
`;
