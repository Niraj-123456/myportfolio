import React from 'react'
import styled from 'styled-components'

function Card() {
    return (
        <Main id="projects">  
            <Heading>
                My Projects
            </Heading>
            <CardContainer>
                <CardImg>
                    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
                    <h1>Main Project</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </CardImg>
                <CardImg>
                    <img src="https://i.pinimg.com/236x/71/28/3b/71283bb49db55cfee5bb6acd1389c465--tree-of-life-the-tree.jpg" />
                    <h1>#1 Project Name</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </CardImg>
                <CardImg>
                    <img src="https://i.pinimg.com/236x/71/28/3b/71283bb49db55cfee5bb6acd1389c465--tree-of-life-the-tree.jpg" />
                    <h1>#2 Project Name</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </CardImg>
                <CardImg>
                    <img src="https://i.pinimg.com/236x/71/28/3b/71283bb49db55cfee5bb6acd1389c465--tree-of-life-the-tree.jpg" />
                    <h1>#3 Project Name</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </CardImg>
            </CardContainer>
        </Main>
    )
}

export default Card

const Main = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 100px;
`

const Heading = styled.h1`
    text-align: center;
    color: #f9f9f9;
    text-transform: uppercase;
    font-weight: 300;
`

const CardContainer = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 50px;
    color: #f9f9f9;
    width: 100%;
`

const CardImg = styled.div`
    margin-bottom: 50px;
    text-align: center;
    border-radius: 2px;
    box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.5);

    &:first-child {
        grid-column: 1 / span 2;
    }

    img {
        height: 300px;
        object-fit: cover;
        box-sizing: border-box;
    }

    p {
        font-size: 13px;
        opacity: 0.8;
        margin: auto;
        padding: 10px;
        z-index: -1;
    }
`