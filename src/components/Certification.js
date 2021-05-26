import React from 'react'
import styled from 'styled-components'

function Certification() {
    return (
        <Container id="certification">
            <h2>Certifications</h2>
            <Content>
                <p>Fugiat cupidatat in duis amet eu et. Nisi officia nulla sint laborum labore aliqua elit proident eu. 
                Velit eu Lorem eu eu Lorem anim amet ullamco labore non ex eu. Qui ex cillum ad deserunt veniam. 
                Cillum culpa ullamco duis cillum adipisicing anim fugiat pariatur. Velit do do velit deserunt fugiat 
                nostrud aliquip nisi laborum officia sunt Lorem. Adipisicing culpa elit sint est eu id aute irure veniam 
                deserunt do occaecat.</p>
            </Content>
        </Container>
    )
}

export default Certification

const Container = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;
    height: 500px;

    h2 {
        font-size: 30px;
        color: #f9f9f9;
        font-weight: 300;
        text-transform: uppercase;
    }
`

const Content = styled.div`
    text-align: center;
    color: #f9f9f9;

    p {
        font-size: 16px;
        font-weight: 300;
    }

`