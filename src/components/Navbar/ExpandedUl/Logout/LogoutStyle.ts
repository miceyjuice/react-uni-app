import styled from "styled-components";
import { InnerLi } from "../../../../styledHelpers/components/navbar/expandedUl/InnerLi";

export const LogoutLi = styled(InnerLi)`
  padding: 0.8rem 0;
  margin-top: 1rem;
  box-shadow: 0px -19px 1rem -23px #222;
  border-top: 1px solid #222;

  > a {
    text-align: center;
    padding-left: 1rem !important;

    ::before{
        max-width: 1.2rem;
    }

    :hover{
      text-shadow: 
      0 0 1em red,
      0 0 0.1em #111;
    }
  }

  > a::before {
    left: 3rem;
  }
`;