import styled from "styled-components";
import Theme from '../Theme'

export const Logo = styled.div`
  width: 46px;
  height: 53px;
  background-image: url(${process.env.PUBLIC_URL}${Theme.Icons.logo});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
`;

export default Logo;
