import styled from "styled-components";
import Theme from "../../Theme";

export const Li = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 3.125rem;
  font-size: ${Theme.FontSizes[18]};
  font-weight: ${Theme.FontWeights.regular};
  color: ${Theme.Colors.red};
`;

export default Li;
