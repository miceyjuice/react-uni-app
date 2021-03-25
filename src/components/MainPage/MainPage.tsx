import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../Sidebar/Sidebar";
import Wrapper from "../../styledHelpers/components/Wrapper";
import Content from "../../styledHelpers/components/Content";

export const App: FC = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <SideBar />
        <Content />
      </Wrapper>
    </>
  );
};

export default App;
