import React from 'react'
import InputLogin from "../../atoms/Input/InputLogin";
import styled from 'styled-components';
import Button from "../../atoms/Button/Button";

const Form = styled.form`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`

const LoginField = () => {

    return (
        <Form>
            <InputLogin
                text='Username'
            />
            <InputLogin
                text='Password'
                type='password'
            />
            <Button text='Sing up'/>
        </Form>
    )
};

export default LoginField;
