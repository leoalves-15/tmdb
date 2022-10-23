import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background: #861040;
  padding: 0 0 18px 0;
  margin-bottom: 32px;
  @media (min-width: 800px) {
    display: flex;
    justify-content: center;
  }
`;

export const Wrap = styled.div`
  margin-left: 16px;
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }
`;

export const TitleCta = styled.h1`
  font-family: "Roboto";
  width: 281px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  margin: 0;
  padding: 40px 0 40px 0;
  @media (min-width: 800px) {
    font-size: 48px;
    line-height: 56px;
    width: 781px;
    text-align: center;
    padding: 85px 0 40px 0;
  }
`;
