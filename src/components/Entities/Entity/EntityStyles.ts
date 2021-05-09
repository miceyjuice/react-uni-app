import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";

export const Wrapper = styled.div`
display: flex;
gap: 1rem;
align-items: center;
padding: 1rem;
border-radius: 0.5rem;
border: 1px solid #444;
background-color: #333;
`;
export const EntityImg = styled.img`
  max-width: 5rem;
  border-radius: 0.5rem;
`;
export const EntityInfo = styled.div`
display: flex;
flex-wrap: wrap;
`;
export const EntityTitle = styled.h3`
font-size: ${Theme.FontSizes[18]};
color: ${Theme.Colors.white};
margin: 0;
`;
export const EntityContent = styled.p`
font-size: ${Theme.FontSizes[12]};
color: #999;
margin: 0;
padding-top: 0.5rem;
`;
