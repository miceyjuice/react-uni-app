import React, { FC } from "react";

import Navbar from "../Navbar/Navbar";
import SideBar from "../Sidebar/Sidebar";

export const App: FC = () => {
  return (
    <>
      <Navbar />
      <SideBar />
    </>
  );
};

export default App;
