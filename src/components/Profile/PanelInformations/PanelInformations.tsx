import React, { ChangeEvent, FC, useContext } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { UserIdContext } from "../../../contexts/UserIdContext";
import { IState } from "../../../reducers";
import { IUsersPhotosReducer } from "../../../reducers/usersPhotosReducers";
import { IUsersReducer } from "../../../reducers/usersReducers";
import Theme from "../../../styledHelpers/Theme";
import { Wrapper } from "../Categories/CategoriesStyle";
import { IUpdateProps } from "../PersonalInfo/PersonalInfo";
import { TextField } from "../PersonalInfo/PersonalInfoStyle";
import { IFormikValues } from "../StartingData";
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

  :last-child {
    margin-bottom: 2rem;
  }
`;

const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  if (!e.target.files) {
    return;
  }
};

export const PanelInformations: FC<IFormikValues & IUpdateProps> = ({
  values,
  isUpdating,
}) => {
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
        <TextField
          type="text"
          name="panelInformations.hourlyFee"
          disabled={!isUpdating}
        />
      </CustomSection>
      <CustomSection>
        <SubTitle>Terms & conditions</SubTitle>
        <TextField
          type="text"
          name="panelInformations.termsAndConditions"
          disabled={!isUpdating}
        />
        <FileField
          id="file"
          name="file"
          type="file"
          onChange={handleFileChange}
          disabled={!isUpdating}
        />
      </CustomSection>
      <SectionTitle>Services & projects</SectionTitle>
      <CustomSection>
        <TextField
          type="text"
          name="panelInformations.services"
          disabled={!isUpdating}
        />
      </CustomSection>
      <SectionTitle>Internal correspondants</SectionTitle>
      <CustomSection>
        <CorrespondantBox>
          <CorrespondantImg
            src={
              usersPhotosList.find(
                (user) =>
                  user.id ===
                  usersList.find(
                    (user) =>
                      user.name === values.panelInformations.correspondants[0]
                  )?.id
              )?.url
            }
          />
          <CorrespondantName
            component="select"
            name="panelInformations.correspondants.0"
            disabled={!isUpdating}
          >
            {usersList.map((user) => (
              <CustomField as="option" value={user.name} key={`user${user.id}`}>
                {user.name}
              </CustomField>
            ))}
          </CorrespondantName>
          <Option beforeImg={Theme.Icons.message}>Message</Option>
          <Option beforeImg={Theme.Icons.user}>Profile</Option>
        </CorrespondantBox>
        <CorrespondantBox>
          <CorrespondantImg
            src={
              usersPhotosList.find(
                (user) =>
                  user.id ===
                  usersList.find(
                    (user) =>
                      user.name === values.panelInformations.correspondants[1]
                  )?.id
              )?.url
            }
          />
          <CorrespondantName
            component="select"
            name="panelInformations.correspondants.1"
            disabled={!isUpdating}
          >
            {usersList.map((user) => (
              <CustomField as="option" value={user.name} key={`user${user.id}`}>
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
