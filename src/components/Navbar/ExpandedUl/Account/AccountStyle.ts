import styled from "styled-components";
import Li from "../../../../styledHelpers/components/navbar/Li";

export const CustomLi = styled(Li)`
  flex-wrap: wrap;
  height: 100%;
`;

export const AccountBox = styled.div`
  display: flex;
`;

export const AccountImg = styled.img`
  border-radius: 50%;
  width: 1.7rem;
  height: 1.7rem;
  min-width: 1.7rem;
  margin: 0 0.4rem;
  background-color: black;
`;

export const AccountInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 1rem;
`;
