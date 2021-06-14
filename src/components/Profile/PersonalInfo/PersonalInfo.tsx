import React, { Dispatch, FC, SetStateAction, useContext } from "react";
import Theme from "../../../styledHelpers/Theme";
import { Formik, ErrorMessage } from "formik";
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
  Undo,
  UndoIcon,
  IconsGroup,
} from "./PersonalInfoStyle";
import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { IUsersReducer } from "../../../reducers/usersReducers";
import { IUsersPhotosReducer } from "../../../reducers/usersPhotosReducers";
import * as Yup from "yup";
import CustomErrorMsg from "../CustomErrorMsg/CustomErrorMsg";
import { SaveBtn } from "../Categories/CategoriesStyle";
import { UserIdContext } from "../../../contexts/UserIdContext";

export interface IUpdateProps {
  isUpdating: boolean;
  toggleUpdating?: Dispatch<SetStateAction<boolean>>;
}

export const PersonalInfo: FC<IUpdateProps> = ({
  isUpdating,
  toggleUpdating,
}) => {
  const { usersList, usersPhotosList } = useSelector<
    IState,
    IUsersReducer & IUsersPhotosReducer
  >((globalState) => ({
    ...globalState.users,
    ...globalState.usersPhotosList,
  }));
  
  const currentUserId = useContext(UserIdContext);

  const onSubmit = (data: {}, onSubmitProps: any) => {
    onSubmitProps.resetForm();
  };

  const InfoSchemat = Yup.object().shape({
    fullName: Yup.string()
      .min(2, "Too short!")
      .max(100, "Too Long!")
      .required("Full name is required"),
    companyName: Yup.string()
      .min(2, "Too short!")
      .max(100, "Too Long!")
      .required("Company name is required!"),
    location: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too Long!")
      .required("Location is required!"),
    status: Yup.string()
      .min(2, "Too short!")
      .max(30, "Too Long!")
      .required("Status is required!"),
    email: Yup.string().email("Invalid e-mail").required("Email is required!"),
    phone: Yup.string()
      .min(8, "Too short!")
      .max(15, "Too long!")
      .required("Phone number is required!"),
  });

  const personalInfos = [
    {
      name: "fullName",
      isDisabled: !isUpdating,
      isBold: true,
    },
    {
      name: "companyName",
      isDisabled: !isUpdating,
      isBold: true,
    },
    {
      name: "location",
      isDisabled: !isUpdating,
      isBold: false,
    },
    {
      name: "status",
      isDisabled: !isUpdating,
      isBold: false,
    },
  ];

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
            fullName: usersList[currentUserId]?.name,
            companyName: usersList[currentUserId]?.company.name,
            location: usersList[currentUserId]?.address.city,
            status: "Partner",
            email: usersList[currentUserId]?.email,
            phone: usersList[currentUserId]?.phone,
          }}
          onSubmit={onSubmit}
          validationSchema={InfoSchemat}
        >
          {({ errors, touched }) => (
            <CustomForm>
              <LeftBox>
                <ProfileImgSection>
                  <ProfileImg src={usersPhotosList[currentUserId]?.url} />
                  <ProfileLink>See profile</ProfileLink>
                </ProfileImgSection>
                <MainInfo>
                  {personalInfos.map((personalInfo) => (
                    <>
                      <TextField
                        name={personalInfo.name}
                        disabled={personalInfo.isDisabled}
                        isBold={personalInfo.isBold}
                      />
                      <ErrorMessage
                        name={personalInfo.name}
                        component={CustomErrorMsg}
                      ></ErrorMessage>
                    </>
                  ))}
                </MainInfo>
              </LeftBox>
              <RightBox>
                {!isUpdating ? (
                  <Edit>
                    <EditIcon
                      src={Theme.Icons.edit}
                      onClick={() => toggleUpdating!(!isUpdating)}
                    />
                  </Edit>
                ) : (
                  <IconsGroup>
                    <Undo>
                      <UndoIcon type="submit"></UndoIcon>
                    </Undo>
                    <Save>
                      <SaveBtn
                        onClick={() => toggleUpdating!(!isUpdating)}
                        type="submit"
                      />
                    </Save>
                  </IconsGroup>
                )}
                <TextField name="email" disabled={!isUpdating} />
                <TextField name="phone" disabled={!isUpdating} />
              </RightBox>
            </CustomForm>
          )}
        </Formik>
      </ProfileInfo>
    </Wrapper>
  );
};

export default PersonalInfo;
