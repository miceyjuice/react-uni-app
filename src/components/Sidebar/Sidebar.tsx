import React, { FC } from "react";
import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";
import SideMenu  from './SideMenu/SideMenu';
import { ProfileSection } from './ProfileSection/ProfileSection';
import { IUserProps, IDisplayProps } from '../MainPage/MainPage';

const StyledWrapper = styled.div<{isHidden: boolean}>`
  display: ${({isHidden}) => isHidden ? 'none' : 'unset'};
  flex-basis: 20%;
  flex-wrap: wrap;
  justify-content: center;
  color: ${Theme.Colors.white};
`;

export const Sidebar: FC<IUserProps & IDisplayProps> = ({userId, isHidden}) => {
  return (
    <StyledWrapper isHidden={isHidden}>
      <ProfileSection userId={userId}/>
      <SideMenu />
    </StyledWrapper>
  );
};

export default Sidebar;
