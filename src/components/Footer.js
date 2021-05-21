import React from 'react'
import styled from 'styled-components'

function Footer() {
    const date = new Date().getFullYear()
    return (
        <div>
            <FooterNav>
                <p>&copy;copyright { date }</p>
                <Nav>
                    <a href="#"><img src="../public/images/facebook_icon_130940.png" /></a>
                    <a href="#"><img src="../public/images/instagram_icon.png" /></a>
                    <a href="#"><img src="../public/images/github-logo.png" /></a>
                </Nav>
            </FooterNav> 
        </div>
    )
}

export default Footer

const FooterNav = styled.div`
    margin-top: 50px;
    height: 70px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    color: #f9f9f9;
    
    p {
        padding: 8px 16px;
    }
`

const Nav = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;

    a {
        text-decoration: none;
        padding: 8px 16px;
        color: #f9f9f9;
        cursor: pointer;

        img {
            height: 20px;
            width: 20px;
        }
    }
    
`
