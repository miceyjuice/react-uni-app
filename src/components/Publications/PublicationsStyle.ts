import { Link } from "react-router-dom";
import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  min-height: 25rem;
  border-radius: 0.5rem;
  background-color: #262525;
`;

export const MainPublication = styled.div`
  position: relative;
  width: 35%;
  color: ${Theme.Colors.white};
  background: #aaa;
  border-radius: 0.5rem 0 0 0.5rem;
`;

export const MainImg = styled.img`
  max-width: 100%;

`;

export const MainInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(11, 11, 11, 0.8) 100%
  );
  border-radius: 0 0 0 0.5rem;
`;

export const Content = styled.p`
  flex-basis: 80%;
  margin-bottom: 0;
`;

export const Date = styled.p`
  flex-basis: 30%;
  padding-right: 0.5rem;
  font-size: ${Theme.FontSizes[12]};
`;

export const Account = styled.div`
  display: flex;
  flex-basis: 70%;
  align-items: center;
  gap: 0.5rem;
`;

export const AccountImg = styled.img`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg)
    saturate(400%) contrast(0.8);
`;

export const AccountInfo = styled.p`
  font-size: ${Theme.FontSizes[12]};
`;

export const PublicationsBox = styled.div`
  flex-basis: 65%;
  padding: 1rem 2rem;
`;
export const BoxTitle = styled.h3`
  font-size: ${Theme.FontSizes[28]};
  margin: 1rem 0;
  color: ${Theme.Colors.red};
`;
export const PublicationsList = styled.div``;

export const MorePublicationsLink = styled(Link)`
  font-size: ${Theme.FontSizes[14]};
  color: ${Theme.Colors.pink};
  text-shadow: 0 0 2px ${Theme.Colors.red};
  text-decoration: none;
`;
