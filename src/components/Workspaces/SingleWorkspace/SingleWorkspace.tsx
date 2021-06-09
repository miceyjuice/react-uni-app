import React, { FC } from "react";
import Feed from "../../Feed/Feed";
import Header from "./Header/Header";
import { WorkspaceWrapper } from "./SingleWorkspaceStyle";
import TilesBox from "./TilesBox/TilesBox";

interface IWorkspaceInfo {
  type: string;
  icon: string;
}

const Workspace: FC<IWorkspaceInfo> = ({ type, icon }) => {
  return (
    <WorkspaceWrapper>
      <Header type={type} icon={icon} />
      <TilesBox />
      <Feed enableAdditionalOptions />
    </WorkspaceWrapper>
  );
};

export default Workspace;
