import styled from "styled-components";

export const Content = styled.div<{fullWidth: boolean}>`
  flex-basis: ${({fullWidth}) => fullWidth ? '100%' : '70%'};
  width: 100%;
`;

export default Content;
