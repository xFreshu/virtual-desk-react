import React from 'react'
import {Wrapper, Container, Diagrams, YourNotes, YourTask, Header} from "./Dashboard.styled";

const Dashboard = () => {

    return (
        <Wrapper>
            <Container>
                <Diagrams>
                    <Header>Diagrams</Header>
                </Diagrams>
                <YourTask>
                    <Header>Your Tasks</Header>
                </YourTask>
                <YourNotes>
                    <Header>Your Notes</Header>
                </YourNotes>
            </Container>
        </Wrapper>
    )
}

export default Dashboard;
