import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";

export const WorkspaceWrapper = styled.div`
  border-radius: 0.5rem;
  color: #f3f3f3;

  > *:not(:last-child) {
    background-color: #222;
    box-shadow: 0 0 0 1px #333;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
`;
