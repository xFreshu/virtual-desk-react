import React from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import TaskManager from "../Task Manager/TaskManager";
import Notes from "../Notes/Notes";

const Navigation = () => {

    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to='/TaskManager'>Task Manager</Link>
                    </li>
                    <li>
                        <Link to='/Notes'>Notes</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path='/TaskManager'>
                    <TaskManager/>
                </Route>
                <Route path='/Notes'>
                    <Notes/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Navigation;
