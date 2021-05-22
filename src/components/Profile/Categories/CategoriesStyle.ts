import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${Theme.Colors.darkGrey};
  padding: 1rem 2rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 100%;
`;
export const Title = styled.h5`
  margin: 0;
  font-size: ${Theme.FontSizes[15]};
  flex-basis: 100%;

  &:not(:first-child) {
    margin-top: 1.5rem;
    margin-bottom: 0;
  }
`;
export const Edit = styled.img`
  width: 1rem;
  height: 1rem;
`;
export const Category = styled.p`
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #3b1d1d;
  box-shadow: 0 0 0.5rem #1f1313;
  width: fit-content;
  font-size: ${Theme.FontSizes[12]};
  margin-bottom: 0;
  margin-right: 1rem;
`;