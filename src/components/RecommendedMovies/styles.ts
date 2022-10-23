import styled from "styled-components";

export const Contain = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-top: 16px;
  @media (min-width: 800px) {
    justify-content: flex-start !important;
  }
`;
export const Containall = styled.section`
  @media (min-width: 800px) {
    padding: 20px 100px;
  }
`;
