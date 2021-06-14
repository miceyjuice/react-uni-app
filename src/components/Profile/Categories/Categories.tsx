import React, { FC } from "react";
import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";
import { Category, SaveBtn, Title, TopBar, Wrapper } from "./CategoriesStyle";
import { Field } from "formik";
import { IUpdateProps } from "../PersonalInfo/PersonalInfo";
import { EditIcon, SaveIcon } from "../PersonalInfo/PersonalInfoStyle";
import { IFormikValues } from "../Profile";
import { categories } from "./CategoriesArray";

interface IOption {
  key: string;
  value: string | number;
}
export interface IField {
  options: IOption[];
}

export interface ICategories {
  title?: string;
  fields: IField[];
}

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
              onClick={() => toggleUpdating!(!isUpdating)}
            />
          ) : (
            <SaveBtn
              onClick={() => toggleUpdating!(!isUpdating)}
              type="submit"
            />
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
