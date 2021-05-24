import React, { FC } from "react";
import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";
import { Wrapper } from "../Categories/CategoriesStyle";
import { Formik, Field, Form } from "formik";

export const SectionTitle = styled.div``;
export const SubTitle = styled.div``;

export const PanelInformations: FC = () => {
  return (
    <Wrapper>
      <SectionTitle>Panel informations</SectionTitle>
      <SubTitle>Hourly fee</SubTitle>
      <Formik initialValues={{ fullName: 'John Krasinski' }} onSubmit={(data, {setSubmitting}) => {
        setSubmitting(true);
      }}>
      </Formik>
    </Wrapper>
  );
};

export default PanelInformations;
