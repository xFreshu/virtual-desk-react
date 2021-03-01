import React from 'react'
import InputLogin from "../../atoms/Input/InputLogin";
import Button from "../../atoms/Button/Button";
import {Form} from "./LoginField.styled";

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
