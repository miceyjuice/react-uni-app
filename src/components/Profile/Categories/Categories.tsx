import React, { FC } from "react";
import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";
import { Category, Edit, Title, TopBar, Wrapper } from "./CategoriesStyle";
import { Field } from "formik";

interface IField {
  key: string;
  value: string;
}

interface ICategories {
  title?: string;
  field: IField[];
}

const categories: ICategories[] = [
  {
    field: [
      {
        key: "Mergers and aquisition",
        value: "category1",
      },
    ],
  },
  {
    title: "Specialities",
    field: [
      {
        key: "Cross border operation",
        value: "category2",
      },
      {
        key: "Transaction over 500M€/$",
        value: "category3",
      },
    ],
  },
  {
    title: "Admission to practice law",
    field: [
      {
        key: "Paris bar association",
        value: "category4",
      },
      {
        key: "Tunisian bar association",
        value: "category5",
      },
    ],
  },
  {
    title: "Counties",
    field: [
      {
        key: "Tunisia",
        value: "category6",
      },
    ],
  },
];

export const Categories: FC = () => {
  return (
    <Wrapper>
      <TopBar>
        <Title>Expertise</Title>
        <Edit src={process.env.PUBLIC_URL + Theme.Icons.edit} />
      </TopBar>
      {categories.map((category) => {
        if (category.title) {
          return (
            <>
              <Title>{category.title}</Title>
              {category.field.map((field) => (
                <Category as="select">
                  <Category as="option">{field.key}</Category>
                  <Category as="option">{field.key}</Category>
                </Category>
              ))}
            </>
          );
        }
      })}
    </Wrapper>
  );
};

export default Categories;
