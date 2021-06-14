import { Field } from "formik";
import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";
import { Category } from "../Categories/CategoriesStyle";

export const InfoBox = styled.div`
  flex-basis: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
  background-color: #333;
  border-radius: 0.5rem;
  padding: 1rem;
  padding-top: 0;
`;

export const Column = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(100px, 1fr));
  grid-template-rows: repeat(4, 50px);

  > * {
    flex-basis: 100%;
  }

  input[type="date" i] {
    padding-inline-start: 4px;
  }
`;
export const ColumnTitle = styled.h4`
  margin: 1rem 0;
`;
export const FieldSelect = styled(Field)`
  max-width: 100%;
`;
export const FieldOption = styled(Field)`
  width: 100%;
`;

export const DateField = styled(Category)`
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
  :disabled{
    opacity: 0.7;
  }
`;

export const SectionLink = styled.a`
  color: ${Theme.Colors.white};
  font-size: ${Theme.FontSizes[14]};

  :hover{
      cursor: pointer;
  }
`;