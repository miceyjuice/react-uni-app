import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledA from "../../../styledHelpers/components/StyledA";
import Theme from "../../../styledHelpers/Theme";

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const AddButton = styled.button<{ bgImage: string; bgSize?: string }>`
  width: 2.75rem;
  height: 2.75rem;
  background-color: ${Theme.Colors.darkGrey};
  border: none;
  border-radius: 0.5rem;
  background-image: ${({ bgImage }) => `url('${bgImage}')`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${({ bgSize }) => (bgSize ? bgSize : "50%")};

  :hover {
    cursor: pointer;
  }
`;

export const ProfileStyledA = styled(StyledA)`
  ::before {
    left: -0.2rem;
    width: 2rem;
    height: 100%;
  }
`;

export const PersonBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PersonImage = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 50%;
  filter: invert(40%) grayscale(100%) brightness(50%) sepia(80%)
    hue-rotate(-50deg) saturate(400%) contrast(2);
`;

export const PersonFullName = styled(Link)`
  flex-basis: 100%;
  font-size: ${Theme.FontSizes[20]};
  font-weight: ${Theme.FontWeights.semibold};
  color: ${Theme.Colors.red};
  margin-bottom: 0;
  margin-top: 1rem;
  text-decoration: none;
  transition: text-decoration 300ms ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`;

export const PersonJob = styled.p`
  font-size: ${Theme.FontSizes[15]};
  font-weight: ${Theme.FontWeights.light};
  color: ${Theme.Colors.white};
  margin: 0 0 3rem 0;
`;
