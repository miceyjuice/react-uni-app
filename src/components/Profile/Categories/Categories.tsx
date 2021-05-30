import React, { FC } from "react";
import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";
import { Category, Title, TopBar, Wrapper } from "./CategoriesStyle";
import { Field } from "formik";
import { IUpdateProps } from "../PersonalInfo/PersonalInfo";
import { EditIcon, SaveIcon } from "../PersonalInfo/PersonalInfoStyle";
import { IFormikValues } from "../Profile";

interface IOption {
  key: string;
  value: string;
}
export interface IField {
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
            key: "specialities",
            value: "Cross border operation",
          },
          {
            key: "specialities",
            value: "Other operations",
          },
        ],
      },
      {
        options: [
          {
            key: "specialities",
            value: "Transaction over 500M€/$",
          },
          {
            key: "specialities",
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
            key: "admission",
            value: "Paris bar association",
          },
          {
            key: "admission",
            value: "London bar association",
          },
        ],
      },
      {
        options: [
          {
            key: "admission",
            value: "Tunisian bar association",
          },
          {
            key: "admission",
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
            key: "counties",
            value: "Tunisia",
          },
          {
            key: "counties",
            value: "Germany",
          },
        ],
      },
    ],
  },
];

export const Categories: FC<IUpdateProps & IFormikValues> = ({
  isUpdating,
  toggleUpdating,
  values,
}) => {
  let categoriesCounter: number = 1;

  return (
    <>
      <Wrapper>
        <TopBar>
          <Title>Expertise</Title>
          {!isUpdating ? (
            <EditIcon
              src={Theme.Icons.edit}
              onClick={() => toggleUpdating(!isUpdating)}
            />
          ) : (
            // <SaveIcon
            //   src={Theme.Icons.save}
            //   onClick={() => toggleUpdating(!isUpdating)}
            //   type="submit"
            // />
            <button onClick={() => toggleUpdating(!isUpdating)} type="submit" />
          )}
        </TopBar>
        {categories.map((category, index) => {
          if (category.title) {
            return (
              <>
                <Title key={`title${index}`}>{category.title}</Title>
                {category.fields.map((fields, i) => (
                  <Category
                    component="select"
                    disabled={!isUpdating}
                    name={`categories.${fields.options[i].key}.${i}`}
                    key={`${
                      fields.options[i].key + Math.trunc(Math.random() * 150)
                    }`}
                  >
                    {categoriesCounter++}
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
              {category.fields.map((fields, i) => (
                <Category
                  component="select"
                  disabled={!isUpdating}
                  name="categories.expertise"
                  value={values.categories.expertise}
                  key={`${
                    fields.options[i].key + Math.floor(Math.random() * 150)
                  }`}
                >
                  {fields.options.map((option) => (
                    <Field
                      as="option"
                      value={option.value}
                      key={`${
                        fields.options[i].key + Math.floor(Math.random() * 150)
                      }`}
                    >
                      {option.value}
                    </Field>
                  ))}
                </Category>
              ))}
            </>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Categories;
