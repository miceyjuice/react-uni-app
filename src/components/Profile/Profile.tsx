import React, { FC, useState } from "react";
import styled from "styled-components";
import Categories from "./Categories/Categories";
import PanelInformations from "./PanelInformations/PanelInformations";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import { IUserProps } from "../MainPage/MainPage";
import { Form, Formik } from "formik";

export const Wrapper = styled.div`
  color: #f3f3f3;
`;

const formValues = {};

export const Profile: FC<IUserProps> = ({ userId }) => {
  const [isUpdatingPersonalInfo, setisUpdatingPersonalInfo] =
    useState<boolean>(false);
  const [isUpdatingMoreInfo, setIsUpdatingMoreInfo] = useState<boolean>(false);

  return (
    <Wrapper>
      <PersonalInfo
        isUpdating={isUpdatingPersonalInfo}
        toggleUpdating={setisUpdatingPersonalInfo}
        userId={userId}
      />
      <Formik enableReinitialize initialValues={{}} onSubmit={() => {}}>
        <Form>
          <Categories />
          <PanelInformations />
        </Form>
      </Formik>
    </Wrapper>
  );
};

export default Profile;
