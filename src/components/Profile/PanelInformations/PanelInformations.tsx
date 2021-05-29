import React, { ChangeEvent, FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IState } from "../../../reducers";
import { IUsersPhotosReducer } from "../../../reducers/usersPhotosReducers";
import { IUsersReducer } from "../../../reducers/usersReducers";
import Theme from "../../../styledHelpers/Theme";
import { IUserProps } from "../../MainPage/MainPage";
import { Wrapper } from "../Categories/CategoriesStyle";
import { TextField } from "../PersonalInfo/PersonalInfoStyle";
import { IFormikValues } from "../Profile";
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

export const PanelInformations: FC<IUserProps & IFormikValues> = ({
  userId,
  values,
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
        <TextField type="text" name="panelInformations.hourlyFee" />
      </CustomSection>
      <CustomSection>
        <SubTitle>Terms & conditions</SubTitle>
        <TextField type="text" name="panelInformations.termsAndConditions" />
        <FileField
          id="file"
          name="file"
          type="file"
          onChange={handleFileChange}
        />
      </CustomSection>
      <SectionTitle>Services & projects</SectionTitle>
      <CustomSection>
        <TextField type="text" name="panelInformations.services" />
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
          >
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
          >
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
      <div>
        <pre>{JSON.stringify(values, null, 2)}</pre>
      </div>
    </PanelWrapper>
  );
};

export default PanelInformations;
