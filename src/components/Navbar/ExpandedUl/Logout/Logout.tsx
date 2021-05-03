import React, { FC } from "react";
import StyledA from "../../../../styledHelpers/components/StyledA";
import Theme from "../../../../styledHelpers/Theme";
import { LogoutLi } from "./LogoutStyle";



export const Logout: FC = () => {
  return (
    <LogoutLi>
      <StyledA to="/logout" beforeImg={Theme.Icons.logout}>
        Logout
      </StyledA>
    </LogoutLi>
  );
};
export default Logout;
