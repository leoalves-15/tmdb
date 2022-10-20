import styled from "styled-components";
import { SubTitle, Description } from "../../styles/generic.styles";

export const Container = styled.article`
  width: 156px;
  height: 280px;
  cursor: pointer;
  margin: 0 16px 32px 0;
  @media (min-width: 800px) {
    margin: 0 32px 48px 0;
    &:nth-child(6n + 0) {
      margin: 0 0px 48px 0;
    }
  }
`;

export const MovieImage = styled.img`
  object-fit: cover;
  width: 156px;
  height: 232px;
  border-radius: 4px;
`;

export const MovieTitle = styled(SubTitle)`
  max-height: 40px;
  white-space: wrap;
  text-overflow: ellipsis;
  max-width: 232px;
  overflow: hidden;
`;

export const MovieDate = styled(Description)`
  height: 20px;
`;
