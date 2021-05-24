import React, { Dispatch, FC, SetStateAction } from "react";
import Theme from "../../../styledHelpers/Theme";
import { Formik, Field, Form } from "formik";
import {
  TopBar,
  Option,
  CloseBtn,
  ProfileInfo,
  LeftBox,
  ProfileImgSection,
  ProfileImg,
  ProfileLink,
  MainInfo,
  RightBox,
  Edit,
  EditIcon,
  Wrapper,
  TextField,
  CustomForm,
  Save,
  SaveIcon,
  Undo,
  UndoIcon,
  IconsGroup,
} from "./PersonalInfoStyle";
import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { IUsersReducer } from "../../../reducers/usersReducers";
import { IUsersPhotosReducer } from "../../../reducers/usersPhotosReducers";
import { IUserProps } from "../../MainPage/MainPage";

interface IUpdateProps {
  isUpdating: boolean;
  toggleUpdating: Dispatch<SetStateAction<boolean>>;
}

export const PersonalInfo: FC<IUpdateProps & IUserProps> = ({
  isUpdating,
  toggleUpdating,
  userId,
}) => {
  const { usersList, usersPhotosList } = useSelector<
    IState,
    IUsersReducer & IUsersPhotosReducer
  >((globalState) => ({
    ...globalState.users,
    ...globalState.usersPhotosList,
  }));

  const setDefaultValues = () => {};

  const onSubmit = (data: {}, onSubmitProps: any) => {
    onSubmitProps.resetForm();
  };

  return (
    <Wrapper>
      <TopBar>
        <Option beforeImg={Theme.Icons.message}>Message</Option>
        <Option beforeImg={Theme.Icons.contract}>Create a request</Option>
        <Option beforeImg={Theme.Icons.suitcase}>Add a cluster</Option>
        <CloseBtn />
      </TopBar>
      <ProfileInfo>
        <Formik
          enableReinitialize
          initialValues={{
            fullName: usersList[userId]?.name,
            companyName: usersList[userId]?.company.name,
            location: usersList[userId]?.address.city,
            status: "Partner",
            email: usersList[userId]?.email,
            phone: usersList[userId]?.phone,
          }}
          onSubmit={onSubmit}
        >
          <CustomForm>
            <LeftBox>
              <ProfileImgSection>
                <ProfileImg src={usersPhotosList[userId]?.url} />
                <ProfileLink>See profile</ProfileLink>
              </ProfileImgSection>
              <MainInfo>
                <TextField name="fullName" disabled={!isUpdating} isBold />
                <TextField name="companyName" disabled={!isUpdating} isBold />
                <TextField name="location" disabled={!isUpdating} />
                <TextField name="status" disabled={!isUpdating} />
              </MainInfo>
            </LeftBox>
            <RightBox>
              {!isUpdating ? (
                <Edit>
                  <EditIcon
                    src={Theme.Icons.edit}
                    onClick={() => toggleUpdating(!isUpdating)}
                  />
                </Edit>
              ) : (
                <IconsGroup>
                  <Undo>
                    <UndoIcon type="submit"></UndoIcon>
                  </Undo>
                  <Save>
                    <SaveIcon
                      src={Theme.Icons.save}
                      onClick={() => toggleUpdating(!isUpdating)}
                    />
                  </Save>
                </IconsGroup>
              )}
              <TextField name="email" disabled={!isUpdating} />
              <TextField name="phone" disabled={!isUpdating} />
            </RightBox>
          </CustomForm>
        </Formik>
      </ProfileInfo>
    </Wrapper>
  );
};

export default PersonalInfo;
