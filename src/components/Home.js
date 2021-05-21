import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <Background>
            <p>Welcome to my portfolio. Here you can view my projects and more.</p>
        </Background>
    )
}

export default Home


const Background = styled.div`
    width: 90%;
    border: 1px solid white;
    background: white;
    color: #000;
    margin: auto;
    margin-top: 50px;
    text-align: center;

    p {
        font-size: 20px;
        font-weight: 600;
    }
`

