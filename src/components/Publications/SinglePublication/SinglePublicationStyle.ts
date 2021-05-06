import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";

export const PublicationImg = styled.img`
    background-color: black;
    width: 6rem;
    height: 100%;
    border-radius: 0.5rem 0 0 0.5rem;
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
`;
export const Account = styled.div`
    display: flex;
`;
export const AccountImg = styled.img``;
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