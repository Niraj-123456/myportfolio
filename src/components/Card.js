import React from 'react'
import styled from 'styled-components'

function Card(props) {
    return (             
        <CardImg>
            <img src={ props.projectImg } />
            <h1>{ props.projectName }</h1>
            <p>{ props.projectDesc }</p>
            <blockquote>Completed- { props.completed }</blockquote>
        </CardImg>
    )
}

export default Card

const CardImg = styled.div`
    margin-bottom: 50px;
    text-align: center;
    border-radius: 4px;
    background-color: rgba(225, 225, 225, 0.5);
    box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.5);

    &:first-child {
        grid-column: 1 / span 2;
    }

    img {
        height: 400px;
        width: 100%;
        box-sizing: content-box;
    }

    h1 {
        padding: 0 10px;
    }

    p {
        font-size: 15px;
        font-weight: 300;
        opacity: 0.8;
        margin: auto;
        padding: 10px;
    }

    blockquote {
        font-size: 11px;
    }
`