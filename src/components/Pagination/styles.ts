import styled from "styled-components";
import { colors } from "../../colors/colors";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

export const ChangePage = styled.img`
  margin-left: 16px;
`;

export const PaginationItem = styled.p`
  font-family: "Roboto";
  margin-left: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${colors.paginationPrimary};
`;

export const PaginationItemActive = styled(PaginationItem)`
    color: ${colors.paginationPrimary};
`;
