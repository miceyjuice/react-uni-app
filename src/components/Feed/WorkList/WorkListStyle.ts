import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";

export const Wrapper = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Work = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #444;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: #222;
`;
export const WorkTitle = styled.h3`
  flex-basis: 100%;
  margin: 0.5rem 0;
`;
export const Content = styled.p`
  color: #ddd;
  margin-bottom: 0.5rem;
`;
export const BottomBar = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0;
  font-size: ${Theme.FontSizes[14]};
  color: #888;
`;
export const CompanyName = styled.p``;
export const Category = styled.p``;
export const LastUpdate = styled.p``;