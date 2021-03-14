import styled from "styled-components";
import {theme} from "../../../assets/Global Style/Theme";

export const Wrapper = styled.div`
position: relative;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
background-color: ${theme.colors.background}; 
`

export const Header = styled.span`
display: inline-block;
position: absolute;
text-transform: uppercase;
font-size: 40px;
font-weight: 700;
letter-spacing: 6px;
top: 10%;
left: 50%;
transform: translateX(-50%);
`
