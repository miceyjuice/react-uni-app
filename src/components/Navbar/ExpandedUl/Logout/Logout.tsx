import React, { FC } from "react";
import styled from "styled-components";
import { InnerLi } from "../../../../styledHelpers/components/navbar/expandedUl/InnerLi";
import Li from "../../../../styledHelpers/components/navbar/Li";
import StyledA from "../../../../styledHelpers/components/StyledA";
import Theme from "../../../../styledHelpers/Theme";

const LogoutLi = styled(InnerLi)`
  padding: 0.8rem 0;
  margin-top: 1rem;
  box-shadow: 0px -19px 1rem -23px #222;
  border-top: 1px solid #222;

  > a {
    text-align: center;

    :hover{
      text-shadow: 
      0 0 1em red,
      0 0 0.1em #111;
    }
  }

  > a::before {
    left: 3rem;
  }
`;

export const Logout: FC = () => {
  return (
    <LogoutLi>
      <StyledA to="/logout" beforeImg={Theme.Icons.home}>
        Logout
      </StyledA>
    </LogoutLi>
  );
};
export default Logout;
