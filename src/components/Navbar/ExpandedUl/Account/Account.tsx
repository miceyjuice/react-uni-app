import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IState } from "../../../../reducers";
import { IUsersReducer } from "../../../../reducers/usersReducers";
import { IUsersPhotosReducer } from "../../../../reducers/usersPhotosReducers";
import { SectionParagraph } from "../../../../styledHelpers/components/navbar/expandedUl/SectionParagraph";
import {
  AccountBox,
  AccountImg,
  AccountInfo,
  AccountLi,
  LinksWrap,
} from "./AccountStyle";
import StyledA from "../../../../styledHelpers/components/StyledA";
import Theme from "../../../../styledHelpers/Theme";



export const Account: FC = () => {
  const { usersList, usersPhotosList } = useSelector<
    IState,
    IUsersReducer & IUsersPhotosReducer
  >((globalState) => ({
    ...globalState.users,
    ...globalState.usersPhotosList,
  }));

  return (
    <AccountLi>
      <SectionParagraph>Account</SectionParagraph>
      <AccountBox>
        <AccountImg src={usersPhotosList[0]?.url} />
        <AccountInfo>
          {usersList[0]?.name}
          <Link to="/profile">See profile</Link>
        </AccountInfo>
      </AccountBox>
      <LinksWrap>
        <StyledA
          to="/privacy"
          fontColor={Theme.Colors.white}
          beforeImg={Theme.Icons.privacy}
          beforeLeft={"5%"}
          fontSize={"0.875rem"}
        >
          Privacy
        </StyledA>
        <StyledA
          to="/settings"
          fontColor={Theme.Colors.white}
          beforeImg={Theme.Icons.settings}
          beforeLeft={"5%"}
          fontSize={"0.875rem"}
        >
          Settings
        </StyledA>
      </LinksWrap>
    </AccountLi>
  );
};
export default Account;
