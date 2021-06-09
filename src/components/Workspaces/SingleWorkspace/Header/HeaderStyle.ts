import styled from "styled-components";
import Theme from "../../../../styledHelpers/Theme";

export const MainInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
`;

export const HeaderWrapper = styled.div`
  border-radius: 0.5rem;
`;
export const TopImg = styled.div`
  background-image: url(${process.env.PUBLIC_URL +"assets/images/luxury-working-room-executive-office.jpg"});
  background-position: center;
  background-size: 100%;
  min-height: 10rem;
  border-radius: 0.5rem 0.5rem 0 0;
`;
export const MainIcon = styled.img`
  max-height: 3rem;
`;
export const MainText = styled.div``;
export const MainTitle = styled.h4`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 0.5rem 0;

  ::after {
    display: inline-block;
    content: "";
    background-image: url(${process.env.PUBLIC_URL + Theme.Icons.cog});
    background-size: 100%;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
  }
`;
export const MainDescription = styled.div`
  font-weight: ${Theme.FontWeights.light};
  font-size: ${Theme.FontSizes[14]};
`;