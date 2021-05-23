import React from 'react'
import styled from 'styled-components'

function About() {
    return (
        <Main id="about">
            <Heading>About Me</Heading>
            <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Content>
        </Main>
    )
}

export default About

const Main = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 50px;
    height: 600px;
    color: #f9f9f9;
`

const Heading = styled.h1`
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
`

const Content = styled.p`
    text-align: center;
    font-size: 16px;
`