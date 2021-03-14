import React, {useState} from 'react'
import AddTask from "../../organisms/Add Task/AddTask";
import { IoMdClose } from 'react-icons/io'
import {Wrapper, AddTasks, Card, Header, TaskContainer, TaskName, TaskDate, DeleteButton, ViewTask} from "./TaskManager.styled";

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
