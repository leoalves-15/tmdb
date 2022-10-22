import styled from "styled-components";

export const Container = styled.article`
  background: #861040;
  padding: 0 0 18px 0;
  height: 1660px;
  padding: 20px;
  @media (min-width: 800px) {
  }
`;

export const ContainerBanner = styled.article`
  display: flex;
  height: 355px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.img`
  width: 186px;
  height: 279px;
  left: 86px;
  top: 90px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
`;

export const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

export const ContainerDetails = styled.div``;

export const Details = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: -0.005em;
  color: #dddddd;
`;

export const Label = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;
