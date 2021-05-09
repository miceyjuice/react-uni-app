import styled from "styled-components";
import { InnerLi } from "../../../../styledHelpers/components/navbar/expandedUl/InnerLi";

export const AccountLi = styled(InnerLi)`
  box-shadow: 0px -19px 1rem -23px #222;
  margin-top: 1rem;
  border-top: 1px solid #222;
`;

export const AccountBox = styled.div`
  display: flex;
  align-items: center;
`;

export const AccountImg = styled.img`
  border-radius: 50%;
  width: 1.7rem;
  height: 1.7rem;
  min-width: 1.7rem;
  margin: 0 0.4rem;
  filter: invert(40%) grayscale(100%) brightness(40%) sepia(100%)
    hue-rotate(-50deg) saturate(400%) contrast(2);
  filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg)
    saturate(600%) contrast(0.8);
`;

export const AccountInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 1rem;
  padding-left: 0.5rem;

  > a {
    padding: 0 !important;
    color: #3161ad;
    font-size: 0.8rem;
    flex-basis: 100%;
  }
`;

export const LinksWrap = styled.div`
  margin-top: 1rem;

  > * {
    padding-left: 3rem;
  }
`;
