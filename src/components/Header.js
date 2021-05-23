import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Header() {
    return (
        <Main id="header">
            <NavBar>
                <ul>
                    <li><AnchorLink href='#header' offset='120' className="active">Home</AnchorLink></li>
                    <li><AnchorLink href='#projects' offset='80'>Projects</AnchorLink></li>
                    <li><AnchorLink href='#about' offset='80'>About Me</AnchorLink></li>
                    <li><AnchorLink href='#contact' offset='80'>contact Me</AnchorLink></li>
                    <li><a href="#">Certifications</a></li>
                </ul>
                
                <Icon>
                    <a href="#"><i class="fab fa-facebook-square"></i></a>
                    <a href="#"><i class="fab fa-instagram-square"></i></a>
                    <a href="#"><i class="fab fa-github-square"></i></a>
                </Icon>
            </NavBar>
            <Name>
                <h1>Niraj Lama</h1>
                <i class="fas fa-arrow-circle-down"></i>
            </Name>
            <Welcome>
                <p>Welcome</p>
            </Welcome>
        </Main>
    )
}

export default Header

const slideFromTop = keyframes`
    from { transform: translateY(-100%); opacity: 0.3; font-size: 50px; }
    to { transform: translateY(0%); opacity: 1; }
`

const Main = styled.div`

`

const Name = styled.div`
    color: white;
    text-transform: uppercase;
    text-align:center;
    margin-top: 150px;

    h1 {
        font-size: 80px;
        font-weight: 600;
        padding: 16px 28px;
    }

    i{
        font-size: 70px;
        animation: ${slideFromTop} ease-in 1s;
    }
`

const NavBar = styled.div`
    position: fixed;
    top: 0%;
    display: flex;
    align-items: center;
    background: #000;
    width: 100%;
    height: 70px;

    ul {
        display: flex;
        align-items: center;
        font-size: 20px;
        margin: 0;
        height: 100%;

        li {
            list-style-type: none;
            padding: 10px 10px;
            margin: 0 10px;

            a {
                text-decoration: none;
                color: #f9f9f9;
                text-transform: uppercase;
                transition: all 0.2s ease-in;

                &:hover {
                    color: gray;
                }

                &.active {
                color: gray;
                }       
            }
        }
    }
`

const Icon = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;

    a {
        padding: 0 15px;
        transition: all 0.2s ease-in;

        &:hover {
            transform: scale(0.9, 0.9);
        }

        i {
            font-size: 30px;
            color: #f9f9f9;
        }
    }
`

const Welcome = styled.div`
    margin: 0;
    margin-top: 50px;
    color: #f9f9f9;
    text-align: center;
    width: 100%;
    width: 100%;
    min-width: 100%;

    p {
        font-size: 50px;
        font-style: italic;
        font-weight: 600;
        opacity: 0.5;
        padding: 10px 10px;
        margin: 0;
        position: relative;

        &::before, &::after {
            position: absolute;
            top: 55%;
            left: 38%;
            content: '';
            width: 50px;
            height: 2px;
            background-color: #f9f9f9;
        }

        &::after {
            left: 58.5%;
        }
    }
`

