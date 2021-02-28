import React from 'react'
import styled from 'styled-components'
import AddTask from "../../organisms/Add Task/AddTask";

const Wrapper = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Card = styled.div`
display: flex;
width: 900px;
height: 500px;
background: rgba( 255, 255, 255, 0.05 );
backdrop-filter: blur( 1.5px );
-webkit-backdrop-filter: blur( 1.5px );
border-radius: 20px;
`
const AddTasks = styled.div`
width: 40%;
background: rgba( 255, 255, 255, 0.2 );
backdrop-filter: blur( 3px );
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
`
const ViewTask = styled.div`
width: 100%;
`
const Header = styled.span`
text-align: center;
display: flex;
justify-content: center;
width: 100%;
font-size: 20px;
margin: 10px 0;
letter-spacing: 1px;
`

const TaskManager = () => {

    return (
        <Wrapper>
            <Card>
                <AddTasks>
                    <Header>Add Task</Header>
                    <AddTask/>
                </AddTasks>
                <ViewTask>
                    <Header>
                        Your tasks
                    </Header>
                </ViewTask>
            </Card>
        </Wrapper>
    )
}

export default TaskManager
