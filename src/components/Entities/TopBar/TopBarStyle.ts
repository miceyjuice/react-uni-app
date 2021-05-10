import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: fit-content;
`;
export const Title = styled.h3`
  padding-left: 1rem;
  color: ${Theme.Colors.white};
  font-weight: ${Theme.FontWeights.regular};
`;
export const DisplayOptions = styled.div`
  display: flex;
  border: 1px solid #222;
  border-radius: 0.5rem;
  margin: 0.5rem 1rem;

  > *:hover {
    cursor: pointer;
    background-color: #444;
  }
`;
export const Mosaic = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  background-color: #333;
  background-color: ${({ isActive }) => (isActive ? "#333" : "transparent")};
  padding: 0 1rem;
  border-radius: 0.5rem;
`;

export const MosaicImg = styled.img`
  width: 1rem;
`;
export const MosaicText = styled.p<{ isActive: boolean }>`
  color: ${Theme.Colors.white};
  margin: 0;
  display: ${({ isActive }) => (isActive ? "inline-block" : "none")};
  padding-left: 1rem;
`;
export const List = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background-color: ${({ isActive }) => (!isActive ? "#333" : "transparent")};
  border-radius: 0.5rem;
`;

export const ListImg = styled.img`
  width: 1rem;
`;

export const ListText = styled.p<{ isActive: boolean }>`
  color: ${Theme.Colors.white};
  padding-left: 1rem;
  margin: 0;
  display: ${({ isActive }) => (!isActive ? "inline-block" : "none")};
`;
