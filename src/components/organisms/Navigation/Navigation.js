import React from 'react'
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import TaskManager from "../../views/Task Manager/TaskManager";
import Notes from "../../views/Notes/Notes";
import Dashboard from "../../views/Dashboard/Dashboard";
import {NavBar, LinkList, LinkItem, StyledLink} from "./Navigation.styled";

const Navigation = () => {

    return (
            <Router>
                <NavBar>
                    <LinkList>
                        <LinkItem>
                            <StyledLink exact to='/' activeClassName='nav-item-active'>Dashboard</StyledLink>
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
                    <Route path='/'>
                        <Dashboard/>
                    </Route>
                </Switch>
            </Router>
    )
}

export default Navigation;
