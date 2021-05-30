import { Field } from "formik";
import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${Theme.Colors.darkGrey};
  padding: 1rem 2rem;
  margin-top: 1rem;
  border-radius: 0.5rem;

  option:focus {
    background-color: black;
  }
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 100%;
`;

export const SaveBtn = styled.button`
  background-color: transparent;
  background-image: url(${Theme.Icons.save});
  background-position: center;
  background-size: cover;
  width: 1.2rem;
  height: 1.2rem;
  border: none;

  :hover {
    cursor: pointer;
    filter: opacity(50%);
  }
`;

export const Title = styled.h5`
  margin: 0;
  font-size: ${Theme.FontSizes[15]};
  flex-basis: 100%;

  &:not(:first-child) {
    margin-top: 1.5rem;
    margin-bottom: 0;
  }
`;
export const Category = styled(Field)`
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #3b1d1d;
  box-shadow: 0 0 0.5rem #1f1313;
  font-size: ${Theme.FontSizes[12]};
  margin-bottom: 0;
  margin-right: 1rem;
  color: ${Theme.Colors.white};
  border: none;
  margin-top: 1rem;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 5px;

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: none;
  }
`;
