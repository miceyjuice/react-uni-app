import { FC } from "react"
import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";

const ErrorBox = styled.div``;
const ErrorMsg = styled.p`
    margin: 0;
    font-size: ${Theme.FontSizes[12]};
    color: ${Theme.Colors.red};
    text-shadow: 0 0 1px ${Theme.Colors.grey};
`;

const CustomErrorMsg:FC = ({children}) => {
    return (
        <ErrorBox>
            <ErrorMsg>
                {children}
            </ErrorMsg>
        </ErrorBox>
    )
}

export default CustomErrorMsg;