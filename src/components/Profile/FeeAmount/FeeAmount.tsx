import React, { FC } from "react";
import { Category } from "../Categories/CategoriesStyle";
import { CustomBox } from "../InternalReviews/InternalReviews";
import { PanelWrapper } from "../PanelInformations/PanelInformations";
import { SectionTitle } from "../PanelInformations/PanelInformationsStyle";
import { Column, ColumnTitle, FieldOption, DateField, SectionLink, InfoBox } from "../Proposals/ProposalsStyle";
import { IReviews } from '../InternalReviews/InternalReviews';
import styled from "styled-components";

const getYears = (): string[] => {
    let years = [];

    for(let i = 1990; i < 2018; i++){
        years.push(i.toString());
    }
    return years;
}

const FeeBox = styled(InfoBox)`
    grid-template-columns: repeat(4, 1fr);
`;

// const fees: IReviews[] = [
//     {
//       title: "Year",
//       elements: ["1990", "1992", "1998"],
//     },
//     {
//       title: "Cost center",
//       elements: ["Renault Brjoisoi", "Renault HQ", "Renault Codasda"],
//     },
//     {
//       title: "Total amount",
//       elements: ["France", "USA", "Italia"],
//     },
//     {
//       title: "Law firm",
//       elements: ["#Tax", "#M&A", "#Social"],
//     },
//   ];

export const FeeAmount: FC = () => {
  return (
    <PanelWrapper>
      <SectionTitle>Amount of fees</SectionTitle>
      {/* <FeeBox>
        {fees.map((fee) => (
          <Column>
            <ColumnTitle>{fee.title}</ColumnTitle>
            {fee.title !== "Date"
              ? fee.elements.map((element, index) => (
                  <Category as="select">
                    <FieldOption
                      as="option"
                    >
                      {element}
                    </FieldOption>
                  </Category>
                ))
              : fee.elements.map(() => <DateField type="date"></DateField>)}
          </Column>
        ))}
      </FeeBox> */}
      <SectionLink>See more fees</SectionLink>
    </PanelWrapper>
  );
};

export default FeeAmount;
