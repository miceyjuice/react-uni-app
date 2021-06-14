import { Field } from "formik";
import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";
import { Category } from "../Categories/CategoriesStyle";


export const CustomSection = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap;
  gap: 1rem;

  :not(:first-of-type){
    margin: 0.5rem 0;
  }

  > * {
    flex-basis: 100%;
  }
`;

export const SectionTitle = styled.h4`
  color:#c72a2a;
  margin: 0;
`;
export const SubTitle = styled.div`
  font-size: ${Theme.FontSizes[14]};
  color: #999;
`;

export const FileField = styled(Field)`
  background-color: #333;
  padding: 1rem 1rem 1rem 3rem;
  border-radius: 0.5rem;
  color: #f3f3f3;
  position: relative;

  ::file-selector-button{
    display: none;
  }

  ::before{
    content: '';
    display: block;
    position: absolute;
    width: 1rem;
    height: 1rem;
    background-image: url(${process.env.PUBLIC_URL + Theme.Icons.file});
    background-size: cover;
    left: 1.15rem;
    top: 50%;
    transform: translateY(-50%);
  }

  :hover {
    cursor: pointer;
  }
`;

export const CorrespondantBox = styled.div`
  width: 100%;
  background: #333;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const CustomField = styled(Field)`
  padding: 1rem;
  font-size: ${Theme.FontSizes[15]};
`;
export const CorrespondantName = styled(Category)`
  margin: 0;
  padding: 0.5rem 1rem;
  font-size: ${Theme.FontSizes[15]};

  :hover {
    filter: contrast(105%);
  }
`;
export const CorrespondantImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 2rem;
`;

export const Option = styled.div<{beforeImg: string}>`
  font-size: ${Theme.FontSizes[15]};
  margin-left: 4rem;
  display: flex;
  align-items: center;

  ::before {
    content: "";
    display: block;
    width: 1rem;
    height: 1rem;
    background-image: ${({ beforeImg }) =>
      `url(${process.env.PUBLIC_URL + beforeImg})`};
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    margin-right: 1rem;
  }
  
  :hover{
    cursor: pointer;
    filter: opacity(70%);
  }
`;