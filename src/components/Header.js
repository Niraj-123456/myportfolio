import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from "react-scroll";


function Header() {
    return (
        <Main id="header">
            <NavBar>  
                <Logo>
                    <h4>My Portfolio</h4>    
                </Logo>  
                <ul>
                    <li><Link to='header' activeClass="active" spy={true} smooth={true} duration={1000} offset={-80}>Home</Link></li>
                    <li><Link to='projects' activeClass="active" spy={true} smooth={true} duration={1000} offset={-80}>Projects</Link></li>
                    <li><Link to='about' activeClass="active" spy={true} smooth={true} duration={1000} offset={-80}>About Me</Link></li>
                    <li><Link to='contact' activeClass="active" spy={true} smooth={true} duration={1000} offset={-80}>contact Me</Link></li>
                    <li><Link to="certification" activeClass="active" spy={true} smooth={true} duration={1000} offset={-80}>Certifications</Link></li>
                </ul>      
            </NavBar>
            <HeroImage>
                <Name>
                    <h1>Hello, I'm Niraj Lama</h1>
                    <h4>Front End Developer Looking For Internship Opportunity in ReactJs</h4>
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
        letter-spacing: 2px;
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
    background: #000;
    width: 100%;
    height: 70px;
    letter-spacing: 2px;

    ul {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        align-items: center;
        font-size: 14px;
        margin: 0;
        height: 100%;

        li {
            list-style-type: none;
            padding: 10px 10px;
            margin: 0 10px;


             a {
                text-decoration: none;
                color: #f9f9f9;
                transition: all 0.2s ease-in;
                cursor: pointer;
                position: relative;

                &:hover {
                    color: gray;
                }

                &.active {
                    color: gray;
                }

                &.active::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -10px;
                    height: 1px;
                    width: 100%;
                    background-color: #f9f9f9;
                }   
            }
        }
        li:nth-last-of-type(1) {
            margin-right: 30px;
        }
    }
`

const Logo =styled.div`
    h4 {
        color: #fff;
        padding: 0 10px;
        margin: 0 20px;
        font-size: 20px;
        font-weight: 500;
    }
`

