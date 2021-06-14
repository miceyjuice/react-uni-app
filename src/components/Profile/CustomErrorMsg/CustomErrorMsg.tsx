import { FC } from "react"
import { ErrorBox, ErrorMsg } from "./CustomErrorMsgStyle";



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