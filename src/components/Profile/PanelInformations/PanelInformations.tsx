import React, { ChangeEvent, FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IState } from "../../../reducers";
import { IUsersPhotosReducer } from "../../../reducers/usersPhotosReducers";
import { IUsersReducer } from "../../../reducers/usersReducers";
import Theme from "../../../styledHelpers/Theme";
import { IUserProps } from "../../MainPage/MainPage";
import { Wrapper } from "../Categories/CategoriesStyle";
import { TextField, } from "../PersonalInfo/PersonalInfoStyle";
import {
  Option,
  SectionTitle,
  CustomSection,
  SubTitle,
  FileField,
  CorrespondantBox,
  CorrespondantImg,
  CorrespondantName,
  CustomField,
} from "./PanelInformationsStyle";

export const PanelWrapper = styled(Wrapper)`
  gap: 1rem;
`;

const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  if (!e.target.files) {
    return;
  }
};

export const PanelInformations: FC<IUserProps> = ({ userId }) => {
  const { usersList, usersPhotosList } = useSelector<
    IState,
    IUsersReducer & IUsersPhotosReducer
  >((globalState) => ({
    ...globalState.users,
    ...globalState.usersPhotosList,
  }));

  return (
    <PanelWrapper>
      <SectionTitle>Panel informations</SectionTitle>
      <CustomSection>
        <SubTitle>Hourly fee</SubTitle>
        <TextField type="text" name="panelInformations.hourlyFee" disabled />
      </CustomSection>
      <CustomSection>
        <SubTitle>Terms & conditions</SubTitle>
        <TextField
          type="text"
          name="panelInformations.termsAndConditions"
          disabled
        />
        <FileField
          id="file"
          name="file"
          type="file"
          onChange={handleFileChange}
        />
      </CustomSection>
      <SectionTitle>Services & projects</SectionTitle>
      <CustomSection>
        <TextField type="text" name="panelInformations.services" disabled />
      </CustomSection>
      <SectionTitle>Internal correspondants</SectionTitle>
      <CustomSection>
        <CorrespondantBox>
          <CorrespondantImg src="https://thispersondoesnotexist.com/image" />
          <CorrespondantName as="select">
            {usersList
              .filter((user) => user.id !== userId + 1)
              .map((user) => (
                <CustomField as="option" value={user.name}>
                  {user.name}
                </CustomField>
              ))}
          </CorrespondantName>
          <Option beforeImg={Theme.Icons.message}>Message</Option>
          <Option beforeImg={Theme.Icons.user}>Profile</Option>
        </CorrespondantBox>
        <CorrespondantBox>
          <CorrespondantImg src="https://thispersondoesnotexist.com/image" />
          <CorrespondantName as="select">
            {usersList
              .filter((user) => user.id !== userId + 1)
              .map((user) => (
                <CustomField as="option" value={user.name}>
                  {user.name}
                </CustomField>
              ))}
          </CorrespondantName>
          <Option beforeImg={Theme.Icons.message}>Message</Option>
          <Option beforeImg={Theme.Icons.user}>Profile</Option>
        </CorrespondantBox>
      </CustomSection>
    </PanelWrapper>
  );
};

export default PanelInformations;
