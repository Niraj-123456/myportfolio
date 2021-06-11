import React from 'react'
import styled from 'styled-components'

function Card(props) {
    return (             
        <CardImg>
            <img src={ props.projectImg } />
            <h1>{ props.projectName }</h1>
            <p>{ props.projectDesc }</p>
            <a type="button" href="#"><button>View Project</button></a>
            <a type="button" href="#"><button>View Github Repo</button></a>
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

    a {
        text-decoration: none;
        
        button {
            height: 40px;
            background-color: #355c7a;
            border: none;
            margin: 10px;
            padding: 0 10px;
            cursor: pointer;
            color: #fff;
            border-radius: 4px;
            letter-spacing: 2px;
            box-shadow: -2px 2px 5px 1px rgba(0, 0, 0, 0.5);
            transition: all 0.2s ease-in;

            &:hover {
                transform: scale(1.1, 1.1);
                background-color: #355aaa;
            }
        }
    }

    blockquote {
        font-size: 11px;
    }
`