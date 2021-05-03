import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IState } from "../../../../reducers";
import { IUsersReducer } from "../../../../reducers/usersReducers";
import { SectionParagraph } from "../../../../styledHelpers/components/navbar/expandedUl/SectionParagraph";
import { AccountBox, AccountImg, AccountInfo, CustomLi } from "./AccountStyle";


export const Account: FC = () => {
  const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));

  return (
    <CustomLi>
      <SectionParagraph>Account</SectionParagraph>
      <AccountBox>
        <AccountImg />
        <AccountInfo>
          { usersList[0]?.name }
          <Link to="/profile">See profile</Link>
        </AccountInfo>
      </AccountBox>
    </CustomLi>
  );
};
export default Account;
