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