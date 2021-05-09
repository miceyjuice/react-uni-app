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
  margin: 0.5rem;
`;
export const Mosaic = styled.div`
  display: flex;
  align-items: center;
  background-color: #333;
  padding: 0 1rem;
  border-radius: 0.5rem;
`;

export const MosaicImg = styled.img`
  width: 1rem;
  margin-right: 1rem;
`;
export const MosaicText = styled.p`
  color: ${Theme.Colors.white};
  margin: 0;
`;
export const List = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

export const ListImg = styled.img`
  width: 1rem;
`;

export const ListText = styled.p`
  color: ${Theme.Colors.white};
  margin-left: 1rem;
  margin: 0;
  display: none;
`;