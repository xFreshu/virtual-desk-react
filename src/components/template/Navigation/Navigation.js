import React from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import TaskManager from "../Task Manager/TaskManager";
import Notes from "../Notes/Notes";
import Home from "../Home/Home";
import {theme} from "../../Root/Theme";

const activeClassName = 'nav-item-active'

const NavBar = styled.nav`
position: fixed;
width: 100%;
`
const LinkList = styled.ul`
display: flex;
justify-content: center;
list-style: none;
font-size: 20px;

`
const LinkItem = styled.li`
margin: 20px 30px;
`
const StyledLink = styled(NavLink).attrs({activeClassName})`
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

const Navigation = () => {

    return (
            <Router>
                <NavBar>
                    <LinkList>
                        <LinkItem>
                            <StyledLink to='/Home' activeClassName='nav-item-active'>Home</StyledLink>
                        </LinkItem>
                        <LinkItem>
                            <StyledLink to='/TaskManager'>Task Manager</StyledLink>
                        </LinkItem>
                        <LinkItem>
                            <StyledLink to='/Notes'>Notes</StyledLink>
                        </LinkItem>
                    </LinkList>
                </NavBar>

                <Switch>
                    <Route path='/TaskManager'>
                        <TaskManager/>
                    </Route>
                    <Route path='/Notes'>
                        <Notes/>
                    </Route>
                    <Route path='/Home'>
                        <Home/>
                    </Route>
                </Switch>
            </Router>
    )
}

export default Navigation;
