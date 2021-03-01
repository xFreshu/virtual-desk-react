import React from 'react'
import LoginField from "../../molecules/LoginField/LoginField";
import {LoginUI, Motto} from "./LoginCard.styled";

const LoginCard = () => {

    return (
        <LoginUI>
            <Motto>Make your tasks easier</Motto>
            <LoginField/>
        </LoginUI>
    )
}

export default LoginCard;
