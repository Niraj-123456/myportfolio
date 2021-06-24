import React from 'react'
import styled from 'styled-components'

function Contact() {
    return (
        <Main id="contact">
            <Heading>Contact Me</Heading>
            <Content>
                <form>
                    <input type="text" placeholder="Enter Your Name" />
                    <input type="text" placeholder="Enter Your Email" />
                    <input type="text" placeholder="Enter Your Address" />
                    <input type="text" placeholder="Enter Your Phone Number" />
                    <button type="submit">Submit</button>
                </form>
            </Content>
        </Main>
    )
}

export default Contact

const Main = styled.div`
    height: auto;
    width: 90%;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
    color: #f9f9f9;
    letter-spacing: 2px;
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

    form {
        width: 80%;
        height: auto;
        margin: auto;
        box-shadow: -2px 5px 5px 5px rgba(0, 0, 0, 0.5);
        border-radius: 4px;
    }

    input[type=text], button {
        display: inline-block;
        margin-top: 40px;
        width: 50%;
        height: 40px;
        border-radius: 4px;
        border: none;
        outline: none;
        box-shadow: -2px 5px 5px 5px rgba(0, 0, 0, 0.3);
    }

    input[type=text] {
        padding: 0 20px;
        font-size: 15px;

        &:focus {
            background-color: rgba(100, 150, 150, 0.2);
            color: #fff;
        }
    }

    input[type=text]:nth-child(1){
        margin-top: 80px;
    }

    button {
        background-color: green;
        color: #fff;
        font-size: 20px;
        transition: all 0.2s ease-in;
        cursor: pointer;
        margin-bottom: 50px;

        &:hover {
            transform: scale(1.1, 1.1);
        }
    }
`