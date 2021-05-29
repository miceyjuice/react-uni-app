import React, { FC, useState } from "react";
import styled from "styled-components";
import Categories from "./Categories/Categories";
import PanelInformations from "./PanelInformations/PanelInformations";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import { IUserProps } from "../MainPage/MainPage";
import { Form, Formik } from "formik";
import Proposals from "./Proposals/Proposals";
import InternalReviews from "./InternalReviews/InternalReviews";
import FeeAmount from "./FeeAmount/FeeAmount";

export const Wrapper = styled.div`
  color: #f3f3f3;
`;

export interface IFormikValues {
  values: {
    categories: {
      expertise: string;
      specialities: string[];
      admission: string[];
      counties: string;
    };
    panelInformations: {
      hourlyFee: string;
      termsAndConditions: string;
      services: string;
      correspondants: string[];
    }
  };
}

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
      <Formik
        enableReinitialize
        initialValues={{
          categories: {
            expertise: "Mergers and aquisition",
            specialities: [
              "Cross border operation",
              "Transaction over 500M€/S",
            ],
            admission: ["Paris bar association", "London bar association"],
            counties: "Tunisia",
          },
          panelInformations: {
            hourlyFee: "610€/hour (Negociated)",
            termsAndConditions: "Monthly 10k€ retainer - see with Jeanny Smith",
            services: "Corporate M&A and international acquisitions",
            correspondants: ['Leanne Graham', 'Leanne Graham']
          },
          proposals: {
            name: ["name1", "name2", "name3"],
            entity: ["entity1", "entity2", "entity3"],
            location: ["location1", "location2", "location3"],
            expertise: ["expertise1", "expertise2", "expertise3"],
            date: ["date1", "date2", "date3"],
            firm: ["firm1", "firm2", "firm3"],
          },
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <Categories
              isUpdating={isUpdatingMoreInfo}
              toggleUpdating={setIsUpdatingMoreInfo}
              values={values}
            />
            <PanelInformations values={values} userId={userId} />
            <Proposals />
            <InternalReviews />
            <FeeAmount />
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Profile;
