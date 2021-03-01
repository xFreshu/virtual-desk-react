import styled from 'styled-components'
import {NavLink} from "react-router-dom";
import {theme} from "../../../assets/Global Style/Theme";

const activeClassName = 'nav-item-active'

export const NavBar = styled.nav`
position: fixed;
width: 100%;
`
export const LinkList = styled.ul`
display: flex;
justify-content: center;
list-style: none;
font-size: 20px;

`
export const LinkItem = styled.li`
margin: 20px 30px;
`
export const StyledLink = styled(NavLink).attrs({activeClassName})`
display: flex;
text-decoration: none;
color: ${theme.colors.text};
padding: 10px 15px;
border-radius: 20px;
transition: .2s linear;
margin: 0 20px;
:hover{
background-color: grey;
}
&.${activeClassName}{
color: white;
background-color: ${theme.colors.text};
}
`
