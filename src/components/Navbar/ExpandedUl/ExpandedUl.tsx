import React, { FC, useState } from "react";
import Filter from "./Filter/Filter";
import Platform from './Platform/Platform'
import Workspace from './Workspace/Workspace'
import { StyledUl } from '../../../styledHelpers/components/navbar/expandedUl/StyledUl';
import Account from "./Account/Account";
import Logout from "./Logout/Logout";
import { IUserIdProps } from '../../MainPage/MainPage'

export interface IFilterProps {
  filterValue: string;
}

export const ExpandedUl: FC<IUserIdProps> = ({userId}) => {

  const [filterValue, setFilterValue] = useState<string>('');

  return (
    <StyledUl>
      <Filter setFilterValue={setFilterValue} filterValue={filterValue}/>
      <Platform filterValue={filterValue} />
      <Workspace filterValue={filterValue} />
      <Account id={userId}/>
      <Logout />
    </StyledUl>
  );
};

export default ExpandedUl;
