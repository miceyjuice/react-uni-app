import React, { FC } from "react";
import { MainInfo } from "../SingleWorkspaceStyle";
import { HeaderWrapper, MainDescription, MainIcon, MainText, MainTitle, TopImg } from "./HeaderStyle";

const Header: FC<{type: string, icon: string}> = ({type, icon}) => {
  return (
    <HeaderWrapper>
      <TopImg />
      <MainInfo>
        <MainIcon src={process.env.PUBLIC_URL + icon} />
        <MainText>
          <MainTitle>{type}</MainTitle>
          <MainDescription>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nobis
            quisquam eligendi vel quae incidunt, cum velit, perspiciatis
            exercitationem sapiente officiis maxime? Nostrum, similique nihil.
          </MainDescription>
        </MainText>
      </MainInfo>
    </HeaderWrapper>
  );
};

export default Header;
