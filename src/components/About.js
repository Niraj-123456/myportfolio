import React from 'react'
import styled from 'styled-components'

function About() {
    return (
        <Main id="about">
            <h1>This is about me page</h1>
        </Main>
    )
}

export default About

const Main = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 50px;
    height: 500px;
    background: #f9f9f9;
`