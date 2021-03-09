import styled from 'styled-components'


export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
`

export const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
width: 1400px;
height: 600px;
background: rgba( 255, 255, 255, 0.05 );
backdrop-filter: blur( 1.5px );
-webkit-backdrop-filter: blur( 1.5px );
border-radius: 20px;
`

export const Diagrams = styled.div`
position: relative;
width: 70%;
height: 50%;
border-bottom: solid 2px;
`

export const YourTask = styled.div`
position: absolute;
right: 0;
width: 30%;
height: 100%;
backdrop-filter: blur( 3px );
`

export const YourNotes = styled.div`
position: relative;
width: 70%;
height: 50%;
`
export const Header = styled.span`
padding-top: 10px;
font-size: 20px;
font-weight: 700;
position: absolute;
left: 50%;
transform: translateX(-50%);
border-bottom: solid 4px;
padding-bottom: 10px;
`
