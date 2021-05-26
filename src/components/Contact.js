import React from 'react'
import styled from 'styled-components'

function Contact() {
    return (
        <Main id="contact">
            <Heading>Contact Me</Heading>
            <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Content>
        </Main>
    )
}

export default Contact

const Main = styled.div`
    height: 600px;
    width: 90%;
    margin: auto;
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
    font-weight: 300;
`