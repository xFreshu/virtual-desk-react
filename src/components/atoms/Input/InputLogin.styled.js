import styled from "styled-components";
import {theme} from "../../../assets/Global Style/Theme";

export const Field = styled.div`
position: relative;
display: flex;
flex-direction: column;
margin: 40px 10%;
`

export const Input = styled.input`
z-index: 1000;
background-color: transparent;
font-size: 1.3rem;
border: none;
outline: none;
border-bottom: solid 1px ${theme.colors.text};
color: ${theme.colors.specialText};
`

export const Label = styled.label`
font-size: 1.7rem;
position: absolute;
transition: .6s;
top: -35px;
opacity: 50%;
`
