import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link, animateScroll as scroll } from "react-scroll";


function Header() {
    return (
        <Main id="header">
            <NavBar>     
                <ul>
                    <li><Link to='header' activeClass="active" spy={true} smooth={true} duration={1000} offset={-80}>Home</Link></li>
                    <li><Link to='projects' activeClass="active" spy={true} smooth={true} duration={1000} offset={-80}>Projects</Link></li>
                    <li><Link to='about' activeClass="active" spy={true} smooth={true} duration={1000} offset={-80}>About Me</Link></li>
                    <li><Link to='contact' activeClass="active" spy={true} smooth={true} duration={1000} offset={-80}>contact Me</Link></li>
                    <li><Link to="certification" activeClass="active" spy={true} smooth={true} duration={1000} offset={-80}>Certifications</Link></li>
                </ul>      
                <Icon>
                    <a href="#"><i className="fab fa-facebook-square"></i></a>
                    <a href="#"><i className="fab fa-instagram-square"></i></a>
                    <a href="#"><i className="fab fa-github-square"></i></a>
                </Icon>
            </NavBar>
            <HeroImage>
                <Name>
                    <h1>Hello, I'm Niraj Lama</h1>
                    <h4>Front End Developer</h4>
                    <i className="fas fa-arrow-circle-down"></i>
                    <p>Welcome</p>
                </Name>
            </HeroImage>
            
        </Main>
    )
}

export default Header

const slideFromTop = keyframes`
    from { transform: translateY(-100%); opacity: 0.3; }
    to { transform: translateY(0%); opacity: 1; }
`

const Main = styled.div`
    
`

const HeroImage = styled.div`
    position: relative;
    margin: 0;
    top: 0;
    width: 100%;
    height: 650px;
    background-image: url('images/hero_image_2.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.8;
    z-index: -1;
`

const Name = styled.div`
    position: absolute;
    top: 25%;
    left: 0%;
    color: white;
    width: 100%;
    text-transform: uppercase;
    text-align:center;
    animation: ${slideFromTop} ease-in 1.5s;

    h1 {
        font-size: 80px;
        font-weight: 400;
        padding: 0 10px;
        margin: 0;
        
    }

    h4 {
        font-size: 20px;
        font-weight: 300;
    }

    i{
        padding: 25px 0;
        font-size: 70px;
    }

    p {
        font-size: 50px;
        font-style: italic;
        font-weight: 400;
        opacity: 0.5;
        padding: 30px 10px;
        margin: 0;
        position: relative;

        &::before, &::after {
            position: absolute;
            top: 55%;
            left: 36%;
            content: '';
            width: 50px;
            height: 2px;
            background-color: #f9f9f9;
        }

        &::after {
            left: 60%;
        }
    }
`

const NavBar = styled.div`
    position: fixed;
    top: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
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
                cursor: pointer;

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
        margin-right: 20px;
        padding: 8px 0;
        transition: all 0.2s ease-in;

        &:hover {
            transform: scale(0.9, 0.9);
        }

        i {
            font-size: 25px;
            color: #fff;
        }
    }
`

