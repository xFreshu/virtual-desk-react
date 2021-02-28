import Particles from "react-particles-js";
import styled from 'styled-components'

const Test = styled(Particles)`
height: 100vh;
width: 100%;
position: absolute;
`


const Particle = () => {

    return (
        <Test
            params={{
                "particles": {
                    "number": {
                        "value": 50
                    },
                    "size": {
                        "value": 3
                    },
                },

                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }}
        />
    )
}

export default Particle;
