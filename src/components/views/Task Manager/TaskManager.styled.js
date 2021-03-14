import styled from "styled-components";
import {theme} from "../../../assets/Global Style/Theme";

export const Wrapper = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
export const Card = styled.div`
display: flex;
width: 900px;
height: 500px;
background: rgba( 255, 255, 255, 0.05 );
backdrop-filter: blur( 1.5px );
-webkit-backdrop-filter: blur( 1.5px );
border-radius: 20px;
`
export const AddTasks = styled.div`
width: 40%;
background: rgba( 255, 255, 255, 0.2 );
backdrop-filter: blur( 3px );
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
`
export const ViewTask = styled.div`
width: 60%;
display: flex;
flex-direction: column;
overflow-y: scroll;
::-webkit-scrollbar {
    display: none;
}
`
export const Header = styled.span`
text-align: center;
display: flex;
justify-content: center;
width: 100%;
font-size: 20px;
margin: 10px 0;
letter-spacing: 1px;
`

export const TaskContainer = styled.div`
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

export const TaskName = styled.span`
font-size: 20px;
padding: 10px;
color: ${theme.colors.specialText};
font-weight: 700;
letter-spacing: 1px;
`
export const TaskDate = styled.span`
font-size: 15px;
padding: 0 10px 10px 10px;
color: grey;
`
export const DeleteButton = styled.button`
position: absolute;
top: 10px;
right: 10px;
font-size: 20px;
background-color: transparent;
border: none;
color: ${theme.colors.specialText};
outline: none;
`
