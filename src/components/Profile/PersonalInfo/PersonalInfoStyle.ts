import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";
import { Field, Form } from "formik";
import { url } from "node:inspector";

export const Wrapper = styled.section`
  border-radius: 0.5rem;
  background-color: ${Theme.Colors.darkGrey};
  padding-bottom: 1rem;
`;
export const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10rem;
  padding: 1rem 0;
`;
export const Option = styled.div<{ beforeImg: string }>`
  position: relative;
  margin-right: -5rem;
  font-size: ${Theme.FontSizes[14]};

  :hover {
    cursor: pointer;
  }

  ::before {
    content: "";
    display: block;
    position: absolute;
    left: -2rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    background-image: ${({ beforeImg }) =>
      `url(${process.env.PUBLIC_URL + beforeImg})`};
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
  }
`;
export const CloseBtn = styled.button`
  margin-right: 2rem;
  background-color: transparent;
  width: 0.8rem;
  height: 0.8rem;
  border: none;
  background-image: url(${process.env.PUBLIC_URL + Theme.Icons.cancel});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const ProfileInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 1rem 2rem;
`;
export const LeftBox = styled.div`
  flex-basis: 50%;
  display: flex;
  gap: 2rem;
`;

export const ProfileImgSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;
export const ProfileImg = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 50%;
  background-color: #555;
`;
export const ProfileLink = styled.a`
  font-size: ${Theme.FontSizes[14]};

  :hover {
    cursor: pointer;
  }
`;
export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > * {
    margin: 0;
  }
`;

export const TextField = styled(Field)<{
  disabled: boolean;
  isbold?: boolean;
}>`
  height: fit-content;
  flex-basis: 100%;
  font-size: ${({ isbold }) =>
    isbold ? Theme.FontSizes[15] : Theme.FontSizes[12]};
  font-weight: ${({ isbold }) =>
    isbold ? Theme.FontWeights.semibold : Theme.FontWeights.light};
  color: #fff;
  border-radius: 0.5rem;
  border: none;
  box-shadow: ${({ disabled }) => (disabled ? "none" : `0 0 0 1px #444`)};
  background-color: transparent;
  padding: ${({ disabled }) => (disabled ? "0" : `0.5rem 1rem`)};

  :focus {
    outline: none;
    background-color: #333;
    box-shadow: 0 0 0 1px #555;
  }
`;
export const RightBox = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  height: 70%;

  > * {
    margin: 0;
  }
`;
export const Edit = styled.div`
  flex-basis: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
`;
export const EditIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;

  :hover {
    cursor: pointer;
    filter: opacity(50%);
  }
`;

export const IconsGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Save = styled(Edit)``;
export const SaveIcon = styled(EditIcon)``;

export const Undo = styled(Edit)``;
export const UndoIcon = styled.button`
  width: 1rem;
  height: 1rem;
  background-color: transparent;
  border: none;
  background-image: url(${process.env.PUBLIC_URL + Theme.Icons.undo});

  :hover {
    cursor: pointer;
    filter: opacity(50%);
  }
`;

export const Email = styled.p`
  font-size: ${Theme.FontSizes[14]};
  font-weight: ${Theme.FontWeights.light};
  flex-basis: 100%;
  text-align: right;
  align-self: flex-end;
`;
export const Phone = styled.p`
  font-size: ${Theme.FontSizes[14]};
  font-weight: ${Theme.FontWeights.light};
  flex-basis: 100%;
  text-align: right;
  align-self: flex-end;
`;

export const CustomForm = styled(Form)`
  display: flex;
  width: 100%;
`;
