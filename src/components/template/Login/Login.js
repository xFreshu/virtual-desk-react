import React from 'react'
import Particle from "../../../assets/Global Style/Particles/Particles";
import LoginCard from "../../organisms/LoginCard/LoginCard";
import {Wrapper, Header} from "./Login.styled";

const Login = () => {

    return (
        <>

            <Wrapper>
                <Particle/>
                <Header>Virtual desk</Header>
                <LoginCard/>
            </Wrapper>

        </>
    )
}

export default Login;
