import React from 'react';
import styled from 'styled-components';
import {theme} from "../../Root/Theme";

const Field = styled.div`
position: relative;
display: flex;
flex-direction: column;
margin: 40px 10%;
`

const Input = styled.input`
z-index: 1000;
background-color: transparent;
font-size: 1.3rem;
border: none;
outline: none;
border-bottom: solid 1px ${theme.colors.text};
color: ${theme.colors.specialText};
`

const Label = styled.label`
font-size: 1.7rem;
position: absolute;
transition: .6s;
top: -35px;
opacity: 50%;
`


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
