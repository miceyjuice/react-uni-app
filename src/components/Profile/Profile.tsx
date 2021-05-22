import React, { FC, useState } from "react";
import styled from "styled-components";
import Categories from "./Categories/Categories";
import PanelInformations from "./PanelInformations/PanelInformations";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

export const Wrapper = styled.div`
  color: #f3f3f3;
`;

export const Profile: FC = () => {
  const [isUpdatingPersonalInfo, setisUpdatingPersonalInfo] = useState<boolean>(false);
  const [isUpdatingMoreInfo, setIsUpdatingMoreInfo] = useState<boolean>(false);

  return (
    <Wrapper>
      <PersonalInfo isUpdating={isUpdatingPersonalInfo} toggleUpdating={setisUpdatingPersonalInfo} />
      <Categories />
      <PanelInformations />
    </Wrapper>
  );
};

export default Profile;
