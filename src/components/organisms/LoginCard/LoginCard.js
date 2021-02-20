import React from 'react'
import styled from 'styled-components'
import LoginField from "../../molecules/LoginField/LoginField";

const LoginUI = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
height: 500px;
width: 500px;
background: rgba( 255, 255, 255, 0.05 );
backdrop-filter: blur( 1.5px );
-webkit-backdrop-filter: blur( 1.5px );
border-radius: 10px;
`

const Motto = styled.span`
position: absolute;
width: 100%;
text-align: center;
margin: 40px 0 0px 0;
font-size: 2rem;
letter-spacing: 2px;

`

const LoginCard = () => {

    return (
        <LoginUI>
            <Motto>Make your tasks easier</Motto>
            <LoginField/>
        </LoginUI>
    )
}

export default LoginCard;
