import React, {useState} from 'react'
import styled from 'styled-components'
import AddTask from "../../organisms/Add Task/AddTask";
import { IoMdClose } from 'react-icons/io'
import {theme} from "../../Root/Theme";

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
width: 60%;
display: flex;
flex-direction: column;
overflow-y: scroll;
::-webkit-scrollbar {
    display: none;
}
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

const TaskContainer = styled.div`
display: flex;
flex-direction: column;
position: relative;
width: 80%;
justify-content: center;
margin: 20px auto;
flex-basis: auto;
flex-grow: 0;
background: rgba( 255, 255, 255, 0.05 );
backdrop-filter: blur( 1.5px );
-webkit-backdrop-filter: blur( 1.5px );
border-radius: 20px;
`

const TaskName = styled.span`
font-size: 20px;
padding: 10px;
color: ${theme.colors.specialText};
font-weight: 700;
letter-spacing: 1px;
`
const TaskDate = styled.span`
font-size: 15px;
padding: 0 10px 10px 10px;
color: grey;
`
const DeleteButton = styled.button`
position: absolute;
top: 10px;
right: 10px;
font-size: 20px;
background-color: transparent;
border: none;
color: ${theme.colors.specialText};
outline: none;

`

const TaskManager = () => {
    const [yourTasks, setYourTasks] = useState([])

    const deleteTask = (id) => {
        setYourTasks(yourTasks.filter((yourTasks) => yourTasks.id !== id))
    }

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000 + 1)
        const newTask = {id, ...task}
        setYourTasks([...yourTasks, newTask]);
    }

    return (
        <Wrapper>
            <Card>
                <AddTasks>
                    <Header>Add Task</Header>
                    <AddTask onAdd={addTask}/>
                </AddTasks>
                <ViewTask Tasks={yourTasks}>
                    <Header>
                        Your tasks
                    </Header>
                    {yourTasks.map((task) =>
                        <TaskContainer key={task.id}>
                            <TaskName>{task.task}</TaskName>
                            <TaskDate>{task.date}</TaskDate>
                            <DeleteButton onClick={()=>deleteTask(task.id)}><IoMdClose/></DeleteButton>
                        </TaskContainer>
                    )}

                </ViewTask>
            </Card>
        </Wrapper>
    )
}

export default TaskManager
