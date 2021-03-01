import React from 'react'
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import TaskManager from "../Task Manager/TaskManager";
import Notes from "../Notes/Notes";
import Dashboard from "../Dashboard/Dashboard";
import {NavBar, LinkList, LinkItem, StyledLink} from "./Navigation.styled";

const Navigation = () => {

    return (
            <Router>
                <NavBar>
                    <LinkList>
                        <LinkItem>
                            <StyledLink to='/Dashboard' activeClassName='nav-item-active'>Dashboard</StyledLink>
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
                    <Route path='/Dashboard'>
                        <Dashboard/>
                    </Route>
                </Switch>
            </Router>
    )
}

export default Navigation;
