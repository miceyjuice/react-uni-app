import styled from "styled-components";
import Theme from "../../Theme";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3.75rem;
  background-color: ${Theme.Colors.darkestGrey};
  max-height: 5.3125rem;
  border-bottom: 1px solid ${Theme.Colors.grey};
`;

export default Nav;
