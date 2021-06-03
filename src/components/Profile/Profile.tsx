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
import { useFormikContext } from "formik";

export const Wrapper = styled.div`
  color: #f3f3f3;
`;

export interface IFormikValues {
  handleChange?: Function;
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
    };
    proposals: {
      name: string[];
      entity: string[];
      location: string[];
      expertise: string[];
      date: string[];
      firm: string[];
    };
    internalReviews: {
      name: string[];
      entity: string[];
      location: string[];
      expertise: string[];
      date: string[];
    };
    feeAmount: {
      year: number[];
      cost: string[];
      totalAmount: string[];
      lawFirm: string[];
    };
  };
}

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
            correspondants: ["Leanne Graham", "Leanne Graham"],
          },
          proposals: {
            name: ["Operation m50", "Operation bondi", "Op. Latandre"],
            entity: ["Renault Brjoisoi", "Renault HQ", "Renault Codasda"],
            location: ["France", "USA", "Italia"],
            expertise: ["expertise1", "expertise2", "expertise3"],
            date: [
              new Date().toLocaleString([], {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              }),
              new Date().toLocaleString([], {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              }),
              new Date().toLocaleString([], {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              }),
            ],
            firm: ["Racine", "Clifford chance", "SVZ"],
          },
          internalReviews: {
            name: ["Operation m50", "Operation bondi", "Op. Latandre"],
            entity: ["Renault Brjoisoi", "Renault HQ", "Renault Codasda"],
            location: ["France", "USA", "Italia"],
            expertise: ["expertise1", "expertise2", "expertise3"],
            date: [
              new Date().toLocaleString([], {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              }),
              new Date().toLocaleString([], {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              }),
              new Date().toLocaleString([], {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              }),
            ],
          },
          feeAmount: {
            year: [2019, 2018, 2017],
            cost: ["CS 153", "CS 153", "CS 47"],
            totalAmount: ["3 500 €", "9 500 €", "10 500 €"],
            lawFirm: ["Clifford chance", "Linklaters", "Linklaters"],
          },
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            {console.log(handleChange)}
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
