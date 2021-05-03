import React, { FC } from "react";
import Filter from "./Filter/Filter";
import Platform from './Platform/Platform'
import Workspace from './Workspace/Workspace'
import { StyledUl } from '../../../styledHelpers/components/navbar/expandedUl/StyledUl';
import Account from "./Account/Account";

export const ExpandedUl: FC = () => {
  return (
    <StyledUl>
      <Filter />
      <Platform />
      <Workspace />
      <Account/>
    </StyledUl>
  );
};

export default ExpandedUl;
