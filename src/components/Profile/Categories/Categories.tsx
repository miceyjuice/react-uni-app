import React, { FC } from "react";
import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";
import { Category, Title, TopBar, Wrapper } from "./CategoriesStyle";
import { Field } from "formik";
import { IUpdateProps } from "../PersonalInfo/PersonalInfo";
import { EditIcon, SaveIcon } from "../PersonalInfo/PersonalInfoStyle";

interface IOption {
  key: string;
  value: string;
}
interface IField {
  options: IOption[];
}

interface ICategories {
  title?: string;
  fields: IField[];
}

const categories: ICategories[] = [
  {
    fields: [
      {
        options: [
          {
            key: "category1",
            value: "Mergers and aquisition",
          },
          {
            key: "category2",
            value: "Some other stuff",
          },
        ],
      },
    ],
  },
  {
    title: "Specialities",
    fields: [
      {
        options: [
          {
            key: "category3",
            value: "Cross border operation",
          },
          {
            key: "category4",
            value: "Other operations",
          },
        ],
      },
      {
        options: [
          {
            key: "category5",
            value: "Transaction over 500M€/$",
          },
          {
            key: "category6",
            value: "Transaction under 250M€/$",
          },
        ],
      },
    ],
  },
  {
    title: "Admission to practice law",
    fields: [
      {
        options: [
          {
            key: "category7",
            value: "Paris bar association",
          },
          {
            key: "category8",
            value: "London bar association",
          },
        ],
      },
      {
        options: [
          {
            key: "category9",
            value: "Tunisian bar association",
          },
          {
            key: "category10",
            value: "Spanish bar association",
          },
        ],
      },
    ],
  },
  {
    title: "Counties",
    fields: [
      {
        options: [
          {
            key: "category11",
            value: "Tunisia",
          },
          {
            key: "category12",
            value: "Germany",
          },
        ],
      },
    ],
  },
];

export const Categories: FC<IUpdateProps> = ({
  isUpdating,
  toggleUpdating,
}) => {
  return (
    <Wrapper>
      <TopBar>
        <Title>Expertise</Title>
        {!isUpdating ? (
          <EditIcon
            src={Theme.Icons.edit}
            onClick={() => toggleUpdating(!isUpdating)}
          />
        ) : (
          <SaveIcon
            src={Theme.Icons.save}
            onClick={() => toggleUpdating(!isUpdating)}
          />
        )}
      </TopBar>
      {categories.map((category) => {
        if (category.title) {
          return (
            <>
              <Title>{category.title}</Title>
              {category.fields.map((fields) => (
                <Category as="select" disabled={!isUpdating}>
                  {fields.options.map((option) => (
                    <Field as="option" name={option.key} value={option.value}>
                      {option.value}
                    </Field>
                  ))}
                </Category>
              ))}
            </>
          );
        }
        return (
          <>
            {category.fields.map((fields) => (
              <Category as="select" disabled={!isUpdating}>
                {fields.options.map((option) => (
                  <Field as="option" name={option.key} value={option.value}>
                    {option.value}
                  </Field>
                ))}
              </Category>
            ))}
          </>
        );
      })}
    </Wrapper>
  );
};

export default Categories;
