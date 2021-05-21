import React from 'react'
import styled from 'styled-components'

function Footer() {
    const date = new Date().getFullYear()
    return (
        <div>
            <FooterNav>
                <p>&copy; copyright { date }</p>
                <Nav>
                    <a href="#"><img src="images/facebook_icon_130940.png" /></a>
                    <a href="#"><img src="images/instagram_icon.png" /></a>
                    <a href="#"><img src="images/github_icon_3.png" /></a>
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
    background-color: rgba(0, 0, 0, 0.2);
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
    padding: 0 10px;

    a {
        text-decoration: none;
        padding: 8px 8px;
        color: #f9f9f9;
        cursor: pointer;

        &:hover {
            transform: scale(0.9, 0.9);
        }

        img {
        height: 30px;
        width: 30px;
        }
    }
}
    
`
