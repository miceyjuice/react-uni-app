import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";

export const ErrorBox = styled.div``;
export const ErrorMsg = styled.p`
    margin: 0;
    font-size: ${Theme.FontSizes[12]};
    color: ${Theme.Colors.red};
    text-shadow: 0 0 1px ${Theme.Colors.grey};
`;