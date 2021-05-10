import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: ${Theme.Colors.darkGrey};
  border-radius: 0.5rem;
  min-height: 20rem;
`;

export const EntitiesList = styled.div<{ listState: boolean }>`
  display: grid;
  width: 100%;
  grid-template-columns: ${({ listState }) =>
    listState ? "repeat(auto-fit, minmax(250px, 1fr))" : "1fr"};
  grid-gap: 1rem;
  padding: 1rem;
`;
