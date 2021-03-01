import React from 'react';
import {Field, Input, Label} from "./InputLogin.styled";

const InputLogin = ({text, type}) => {

    return (
        <Field>
            <Input
                type={type}
                required
            />
            <Label>{text}</Label>
        </Field>
    )
}

export default InputLogin;
