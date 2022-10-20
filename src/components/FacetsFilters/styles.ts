import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media (min-width: 800px) {
    justify-content: center;
  }
`;

export const LabelCta = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 8px 0;
  color: #ffffff;
  @media (min-width: 800px) {
    text-align: center;
    margin: 0 0 16px 0;
  }
`;

export const FacetsCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  height: 32px;
  margin: 0 12px 12px 0;
  background: #ffffff;
  border-radius: 4px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #323232;
`;
