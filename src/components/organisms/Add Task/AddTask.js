import React, {useState} from 'react'
import {Wrapper, Input, Button} from "./AddTask.styled";

const AddTask = ({ onAdd }) => {
    const [task, setTask] = useState();
    const [date, setDate] = useState();

    const onSubmit = (e) => {
        e.preventDefault()

        if (!task){
            alert('Please add your task name!')
        return}
        if(!date){
            alert('Please add your deadline!')
            return
        }

        onAdd({task, date})

        setTask('');
        setDate('');
    }


    return (
        <Wrapper onSubmit={onSubmit}>
            <Input type="text" placeholder='Your task' value={task} onChange={(e) => setTask(e.target.value)}/>
            <Input type="date" placeholder='Date' value={date} onChange={(e) => setDate(e.target.value)}/>
            <Button type='submit'>Add Task</Button>
        </Wrapper>
    )
}

export default AddTask;
