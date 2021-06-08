import { FC } from "react";
import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";

interface IAdditionalOption {
  icon: string;
  text: string;
}

const additionalOptions: IAdditionalOption[] = [
  {
    icon: "",
    text: "All",
  },
  {
    icon: Theme.Icons.entities,
    text: "SAS",
  },
  {
    icon: Theme.Icons.entities,
    text: "SARL",
  },
  {
    icon: Theme.Icons.entities,
    text: "Secondary business",
  },
  {
    icon: Theme.Icons.network,
    text: "Communities",
  },
  {
    icon: Theme.Icons.contract,
    text: "POA",
  },
  {
    icon: Theme.Icons.network,
    text: "Survey",
  },
  {
    icon: Theme.Icons.more,
    text: "",
  },
];

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
export const AdditionalOption = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0 1px #333;
  transition: all 250ms cubic-bezier(0.47, 0, 0.745, 0.715);

  :hover {
    cursor: pointer;
    background-color: #222;
  }
`;
export const OptionIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;
export const OptionText = styled.div`
  font-size: ${Theme.FontSizes[14]};
  font-weight: ${Theme.FontWeights.light};
`;

const AdditionalOptions: FC = () => {
  return (
    <Wrapper>
      {additionalOptions.map((option) => (
        <AdditionalOption>
          {option.icon != "" && <OptionIcon src={option.icon} />}
          {option.text != "" && <OptionText>{option.text}</OptionText>}
        </AdditionalOption>
      ))}
    </Wrapper>
  );
};

export default AdditionalOptions;
