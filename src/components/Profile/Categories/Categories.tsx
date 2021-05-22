import React, { FC } from "react";
import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";
import { Category, Edit, Title, TopBar, Wrapper } from "./CategoriesStyle";

export const Categories: FC = () => {
  return (
    <Wrapper>
      <TopBar>
        <Title>Expertise</Title>
        <Edit src={process.env.PUBLIC_URL + Theme.Icons.edit} />
      </TopBar>
      <Category>Mergers and aquisition</Category>
      <Title>Specialities</Title>
      <Category>Cross border operation</Category>
      <Category>Transaction over 500M€/$</Category>
      <Title>Admission to practice law</Title>
      <Category>Paris bar association</Category>
      <Category>Tunisian bar association</Category>
      <Title>Counties</Title>
      <Category>Tunisia</Category>
    </Wrapper>
  );
};

export default Categories;
