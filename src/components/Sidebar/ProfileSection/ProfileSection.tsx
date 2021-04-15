import { FC } from "react";
import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";

import StyledA from "../../../styledHelpers/components/StyledA";
import { StyledUl, StyledLi } from "../SideMenu/SideMenu";

import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { IUsersReducer } from "../../../reducers/usersReducers";

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const AddButton = styled.button<{ bgImage: string; bgSize?: string }>`
  width: 2.75rem;
  height: 2.75rem;
  background-color: ${Theme.Colors.darkGrey};
  border: none;
  border-radius: 0.5rem;
  background-image: ${({ bgImage }) => `url('${bgImage}')`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${({ bgSize }) => (bgSize ? bgSize : "50%")};

  :hover {
    cursor: pointer;
  }
`;

const ProfileStyledA = styled(StyledA)`
  ::before {
    left: -0.2rem;
    width: 2rem;
    height: 100%;
  }
`;

const PersonBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PersonImage = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 50%;
  background-color: ${Theme.Colors.grey};
`;

const PersonFullName = styled.h3`
  flex-basis: 100%;
  font-size: ${Theme.FontSizes[20]};
  font-weight: ${Theme.FontWeights.semibold};
  color: ${Theme.Colors.red};
  margin-bottom: 0;
`;

const PersonJob = styled.p`
  font-size: ${Theme.FontSizes[15]};
  font-weight: ${Theme.FontWeights.light};
  color: ${Theme.Colors.white};
  margin: 0 0 3rem 0;
`;

const ProfileOptions = styled.div``;

export const ProfileSection: FC = () => {
  const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));

  return (
    <Wrapper>
      {console.log(usersList)}
      <PersonBlock>
        <PersonImage />
        <PersonFullName>
          {usersList[Math.floor(Math.random() * 9)]?.name}
        </PersonFullName>
        <PersonJob>Job title - Company</PersonJob>
      </PersonBlock>
      <ProfileOptions>
        <StyledUl>
          <StyledLi padding={"1rem 1.5rem"}>
            <ProfileStyledA
              to="/your-network"
              paddingLeft={"3rem"}
              beforeImg={Theme.Icons.network}
            >
              {" "}
              Your network{" "}
            </ProfileStyledA>
            <AddButton bgImage={Theme.Icons.userAdd} />
          </StyledLi>
          <StyledLi padding={"1rem 1.5rem"}>
            <ProfileStyledA
              to="/your-publications"
              paddingLeft={"3rem"}
              beforeImg={Theme.Icons.yourPublications}
            >
              {" "}
              Your publications{" "}
            </ProfileStyledA>
            <AddButton bgSize={"38%"} bgImage={Theme.Icons.plus} />
          </StyledLi>
        </StyledUl>
      </ProfileOptions>
    </Wrapper>
  );
};

export default ProfileSection;
