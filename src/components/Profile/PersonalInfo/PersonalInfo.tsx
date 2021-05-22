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
  Email,
  Phone,
  Wrapper,
  TextField,
  CustomForm,
} from "./PersonalInfoStyle";

interface IUpdateProps {
  isUpdating: boolean;
  toggleUpdating: Dispatch<SetStateAction<boolean>>;
}

export const PersonalInfo: FC<IUpdateProps> = ({isUpdating, toggleUpdating}) => {
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
          initialValues={{
            fullName: "Shorty Morty",
            companyName: "Cliffor Chance",
            location: "New York",
            status: "Partner",
            email: "djiasdioas@gmail.com",
            phone: "+33 (0)6 12 51 23",
          }}
          onSubmit={(data) => console.log(data)}
        >
          <CustomForm>
            <LeftBox>
              <ProfileImgSection>
                <ProfileImg />
                <ProfileLink>See profile</ProfileLink>
              </ProfileImgSection>
              <MainInfo>
                <TextField name="fullName" disabled={!isUpdating} isBold />
                <TextField name="companyName" disabled={!isUpdating}  isBold />
                <TextField name="location" disabled={!isUpdating}  />
                <TextField name="status" disabled={!isUpdating}  />
              </MainInfo>
            </LeftBox>
            <RightBox>
              <Edit>
                <EditIcon src={Theme.Icons.edit} onClick={() => toggleUpdating(!isUpdating)} />
              </Edit>
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
