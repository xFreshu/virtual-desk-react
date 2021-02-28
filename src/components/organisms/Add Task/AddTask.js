import React from 'react'
import styled from 'styled-components'
import {theme} from "../../Root/Theme";

const Wrapper = styled.form`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
font-size: 20px;
height: 70%;
position: absolute;
top: 50%;
transform: translateY(-50%);
`

const Input = styled.input`
background-color: transparent;
outline: none;
border: none;
color: ${theme.colors.specialText};
font-weight: 700;
border-bottom: solid 2px ${theme.colors.text};
margin-bottom: 70px;
width: 80%;
font-size: 20px;
`

const Button = styled.button`
padding: 10px 20px;
background-color: transparent;
border: solid 2px ${theme.colors.text};
color: ${theme.colors.text};
border-radius: 10px;
transition: .2s;
:hover{
background-color: ${theme.colors.text};
color: white;
}
`

const AddTask = () => {

    return(
        <Wrapper>
                <Input type="text" placeholder='Your task'/>
                <Input type="text" placeholder='Date'/>
                <Button type='submit'>Add Task</Button>
        </Wrapper>
    )
}

export default AddTask;
