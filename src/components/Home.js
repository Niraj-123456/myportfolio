import React from 'react'
import styled from 'styled-components'
import Card from './Card'

function Home() {
    return (
        <Container id="home">
            <Card />
        </Container>
    )
}

export default Home

const Container = styled.div`
    min-height: calc(100vh - 140px);
`