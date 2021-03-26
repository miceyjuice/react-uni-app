import React, { FC } from "react";
import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";
import SideMenu  from './SideMenu/SideMenu';
import { ProfileSection } from './ProfileSection/ProfileSection';

const StyledWrapper = styled.div`
  flex-basis: 20%;
  flex-wrap: wrap;
  justify-content: center;
  color: ${Theme.Colors.white};
`;

export const Sidebar: FC = () => {
  return (
    <StyledWrapper>
      <ProfileSection/>
      <SideMenu />
    </StyledWrapper>
  );
};

export default Sidebar;
