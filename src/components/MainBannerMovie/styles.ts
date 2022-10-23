import styled from "styled-components";
import { colors } from "../../colors/colors";

export const Container = styled.article`
  background: ${colors.primary};
  padding: 0 0 30px 0;
  margin-bottom: 30px;
  padding: 20px;
  @media (min-width: 800px) {
    display: flex;
    margin-bottom: 100px;
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
  @media (min-width: 800px) {
    width: 383px;
    height: 574px;
    margin-bottom: -280px;
  }
`;

export const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
  color: ${colors.witheText};
`;

export const ContainerDetails = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Description = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: ${colors.witheText};
  margin: 0;
`;

export const Details = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: -0.005em;
  color: ${colors.greyText};
`;

export const Label = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: ${colors.witheText};
`;

export const CreditName = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: ${colors.witheText};
  margin: 0;
`;

export const ContainerCredits = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-top: 40px;
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`;

export const ContainCredits = styled.div``;
