import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  gap: 16px;
  width: 191px;
  height: 336px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-left: 20px;
  margin-bottom: 20px;
  &:first-child {
    margin-left: 0px;
  }
`;

export const ActorImage = styled.img`
  width: 175px;
  height: 222px;
  border-radius: 4px;
  object-fit: cover;
`;

export const ActorName = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #131313;
  margin: 0;
`;

export const CharacterName = styled.p`
  width: 174px;
  height: 48px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #131313;
  margin: 0;
`;
