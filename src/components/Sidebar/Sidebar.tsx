import React, { FC } from "react";
import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";

import StyledA from "../../styledHelpers/components/StyledA";

const AddButton = styled.button`
  width: 2.75rem;
  height: 2.75rem;
  background-color: ${Theme.Colors.darkGrey};
  border: none;
  border-radius: 0.5rem;
`;

const ProfileSection = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const PersonBlock = styled.div``;
const PersonImage = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 50%;
  background-color: #ccc;
`;
const PersonFullName = styled.h3`
  flex-basis: 100%;
  font-size: ${Theme.FontSizes[20]};
  font-weight: ${Theme.FontWeights.semibold};
  color: ${Theme.Colors.red};
`;
const PersonJob = styled.p`
  font-size: ${Theme.FontSizes[15]};
  font-weight: ${Theme.FontWeights.light};
  color: ${Theme.Colors.white};
`;

const ProfileOptions = styled.div``;
const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style-type: none;
  width: 20.625rem;
  margin: 0;
  padding: 0;
`;
const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 1rem 1.5rem;
  max-height: 4rem;
  background-color: #262525;
  border-radius: 0.5rem;
`;

const SideMenu = styled.div``;

const StyledWrapper = styled.div`
  flex-basis: 20%;
  flex-wrap: wrap;
  justify-content: center;
  color: ${Theme.Colors.white};
`;

export const App: FC = () => {
  return (
    <StyledWrapper>
      <ProfileSection>
        <PersonBlock>
          <PersonImage />
          <PersonFullName>Humberta Swift</PersonFullName>
          <PersonJob>Job title - Company</PersonJob>
        </PersonBlock>
        <ProfileOptions>
          <StyledUl>
            <StyledLi>
              <StyledA padding={'2rem'} beforeImg={""}> Your network </StyledA>
              <AddButton />
            </StyledLi>
            <StyledLi>
              <StyledA padding={'2rem'} beforeImg={""}> Your publications </StyledA>
              <AddButton />
            </StyledLi>
          </StyledUl>
        </ProfileOptions>
      </ProfileSection>
      <SideMenu>
        <StyledUl>
          <StyledLi>
            <StyledA padding={'2rem'} beforeImg={""}>Publications</StyledA>
          </StyledLi>
          <StyledLi>
            <StyledA padding={'2rem'} beforeImg={""}>Ecosystem</StyledA>
          </StyledLi>
          <StyledLi>
            <StyledA padding={'2rem'} beforeImg={""}>Entities</StyledA>
          </StyledLi>
        </StyledUl>
      </SideMenu>
    </StyledWrapper>
  );
};

export default App;
