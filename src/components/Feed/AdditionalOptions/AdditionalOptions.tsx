import { FC } from "react";
import Theme from "../../../styledHelpers/Theme";
import { AdditionalOption, OptionIcon, OptionText, Wrapper } from "./AdditionalOptionsStyle";

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
