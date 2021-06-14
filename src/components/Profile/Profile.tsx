import React, { FC, useState } from "react";
import styled from "styled-components";
import Categories from "./Categories/Categories";
import PanelInformations from "./PanelInformations/PanelInformations";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import { Form, Formik } from "formik";
import Proposals from "./Proposals/Proposals";
import InternalReviews from "./InternalReviews/InternalReviews";
import FeeAmount from "./FeeAmount/FeeAmount";
import { useFormikContext } from "formik";
import { startingData } from "./StartingData";

export const Wrapper = styled.div`
  color: #f3f3f3;
`;

export const Profile: FC = () => {
  const [isUpdatingPersonalInfo, setisUpdatingPersonalInfo] =
    useState<boolean>(false);
  const [isUpdatingMoreInfo, setIsUpdatingMoreInfo] = useState<boolean>(false);

  console.log(typeof useFormikContext());

  return (
    <Wrapper>
      <PersonalInfo
        isUpdating={isUpdatingPersonalInfo}
        toggleUpdating={setisUpdatingPersonalInfo}
      />
      <Formik
        enableReinitialize
        initialValues={startingData.values}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <Categories
              isUpdating={isUpdatingMoreInfo}
              toggleUpdating={setIsUpdatingMoreInfo}
              values={values}
            />
            <PanelInformations
              isUpdating={isUpdatingMoreInfo}
              values={values}
            />
            <Proposals
              isUpdating={isUpdatingMoreInfo}
              values={values}
              handleChange={handleChange}
            />
            <InternalReviews isUpdating={isUpdatingMoreInfo} values={values} />
            <FeeAmount isUpdating={isUpdatingMoreInfo} values={values} />
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Profile;
