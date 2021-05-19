import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <Header>
            <p>Niraj Lama</p>
        </Header>
    )
}

export default Home

const Header = styled.div`
    color: white;
    text-transform: uppercase;
    text-align:center;

    p {
        font-size: 25px;
        font-weight: 600;
    }
`

