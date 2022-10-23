import styled from "styled-components";
import { colors } from "../../colors/colors";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media (min-width: 800px) {
    justify-content: center;
    padding-bottom: 70px;
  }
`;

export const LabelCta = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 8px 0;
  color: ${colors.witheText};
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
  background: ${colors.withe};
  border-radius: 4px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${colors.midiumGrey};
`;

export const FacetsCardActive = styled(FacetsCard)`
  background: ${colors.selectedFacets};
  color: ${colors.withe};
`;

export const CloseImage = styled.img`
  margin-left: 5px;
`;
