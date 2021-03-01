import styled from "styled-components";
import {theme} from "../../../assets/Global Style/Theme";

export const Btn = styled.button`
background-color: transparent;
border: ${theme.colors.text} solid 2px;
color: ${theme.colors.text};
font-weight: 700;
width: 80%;
margin: 30px 10% 0 10%;
padding: 10px 0;
border-radius: 10px;
transition: .6s;
letter-spacing: 2px;
position: absolute;
bottom: 15%;
:hover{
background-color: ${theme.colors.text};
color: ${theme.colors.background};
}
`
