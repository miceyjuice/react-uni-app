import React, { FC } from "react";
import { Category } from "../Categories/CategoriesStyle";
import { PanelWrapper } from "../PanelInformations/PanelInformations";
import { SectionTitle } from "../PanelInformations/PanelInformationsStyle";
import {
  Column,
  ColumnTitle,
  DateField,
  FieldOption,
  InfoBox,
  SectionLink,
} from "./ProposalsStyle";

interface IProposals {
  title: string;
  elements: string[];
}

const proposals: IProposals[] = [
  {
    title: "Name",
    elements: ["Operation sex", "Operation botox", "Op. Latandre"],
  },
  {
    title: "Entity",
    elements: ["Renault Brjoisoi", "Renault HQ", "Renault Codasda"],
  },
  {
    title: "Location",
    elements: ["France", "USA", "Italia"],
  },
  {
    title: "Expertise",
    elements: ["#Tax", "M&A", "#Social"],
  },
  {
    title: "Date",
    elements: ["dsds", "USA", "Italia"],
  },
  {
    title: "Firm",
    elements: ["Racine", "Clifford chance", "SVZ"],
  },
];

export const Proposals: FC = () => {
  return (
    <PanelWrapper>
      <SectionTitle>Proposals</SectionTitle>
      <InfoBox>
        {proposals.map((proposal) => (
          <Column>
            <ColumnTitle>{proposal.title}</ColumnTitle>
            {proposal.title !== "Date"
              ? proposal.elements.map((element, index) => (
                  <Category as="select">
                    <FieldOption
                      as="option"
                      value={proposal.title.toLowerCase() + (index + 1)}
                    >
                      {element}
                    </FieldOption>
                  </Category>
                ))
              : proposal.elements.map((element, index) => (
                  <DateField type="date"></DateField>
                ))}
          </Column>
        ))}
      </InfoBox>
      <SectionLink>See more proposals</SectionLink>
    </PanelWrapper>
  );
};

export default Proposals;
