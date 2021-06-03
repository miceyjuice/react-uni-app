import React, { FC, useContext } from "react";
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
import { UserIdContext } from "../../../../contexts/UserIdContext";

export const Account: FC = () => {
  const { usersList, usersPhotosList } = useSelector<
    IState,
    IUsersReducer & IUsersPhotosReducer
  >((globalState) => ({
    ...globalState.users,
    ...globalState.usersPhotosList,
  }));

  const currentUserId = useContext(UserIdContext);

  return (
    <AccountLi>
      <SectionParagraph>Account</SectionParagraph>
      <AccountBox>
        <AccountImg src={usersPhotosList[currentUserId]?.url} />
        <AccountInfo>
          {usersList[currentUserId]?.name}
          <Link to="/profile">See profile</Link>
        </AccountInfo>
      </AccountBox>
      <LinksWrap>
        <StyledA
          to="/privacy"
          fontcolor={Theme.Colors.white}
          beforeimg={Theme.Icons.privacy}
          beforeleft={"5%"}
          fontsize={"0.875rem"}
        >
          Privacy
        </StyledA>
        <StyledA
          to="/settings"
          fontcolor={Theme.Colors.white}
          beforeimg={Theme.Icons.settings}
          beforeleft={"5%"}
          fontsize={"0.875rem"}
        >
          Settings
        </StyledA>
      </LinksWrap>
    </AccountLi>
  );
};
export default Account;
