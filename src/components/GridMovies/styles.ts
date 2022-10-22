import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  cursor: pointer;
  max-width: 1100px;
  justify-content: center;
  @media (min-width: 800px) {
    justify-content: flex-start;
  }
`;
