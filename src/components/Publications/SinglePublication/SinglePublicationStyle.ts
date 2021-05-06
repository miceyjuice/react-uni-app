import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";

export const PublicationImg = styled.img`
  background-color: black;
  width: 6rem;
  height: 100%;
  border-radius: 0.5rem 0 0 0.5rem;
  filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg)
    saturate(400%) contrast(0.8);
`;

export const PublicationInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem 1rem;
  color: ${Theme.Colors.white};
`;

export const Content = styled.p`
  flex-basis: 100%;
  font-size: ${Theme.FontSizes[14]};
  text-overflow: ellipsis;
  overflow: hidden;
  width: 30rem;
  white-space: nowrap;
`;
export const Date = styled.p`
  font-size: ${Theme.FontSizes[10]};
  padding-right: 1rem;
  align-self: center;
`;
export const Account = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const AccountImg = styled.img`
  width: 1rem;
  height: 1rem;
  background-color: red;
  border-radius: 50%;
`;
export const AccountInfo = styled.p`
  font-size: ${Theme.FontSizes[10]};
  font-weight: ${Theme.FontWeights.semibold};
`;

export const Wrapper = styled.div`
  display: flex;
  background-color: ${Theme.Colors.darkGrey};
  margin: 0.5rem 0;
  border-radius: 0.5rem;
`;
