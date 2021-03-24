import styled from "styled-components";
import Theme from "../Theme";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem;
  background-color: ${Theme.Colors.darkestGrey};
  max-height: 5.3125rem;
`;

export default Nav;
