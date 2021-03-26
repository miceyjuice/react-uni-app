import { FC } from "react";
import Li from "../../styledHelpers/components/navbar/Li";
import Ul from "../../styledHelpers/components/navbar/Ul";
import StyledA from "../../styledHelpers/components/StyledA";
import SearchInput from '../../styledHelpers/components/navbar/SearchInput';
import Theme from "../../styledHelpers/Theme";


export const App: FC = () => {
  return (
      <Ul>
        <Li>
          <SearchInput type="text"/>
        </Li>
        <Li>
          <StyledA beforeImg={Theme.Icons.home} afterImg={Theme.Icons.dropdown}>
            Home
          </StyledA>
        </Li>
        <Li>
          <StyledA beforeImg={Theme.Icons.home} afterImg={Theme.Icons.dropdown}>
            Home
          </StyledA>
        </Li>
      </Ul>
  );
};

export default App;
