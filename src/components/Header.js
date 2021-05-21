import React from 'react'
import styled, { keyframes } from 'styled-components'

function Header() {
    return (
        <Name>
            <p>Niraj Lama</p>
            <i class="fas fa-arrow-circle-down"></i>
        </Name>
    )
}

export default Header

const slideFromTop = keyframes`
    from { transform: translateY(-100%); opacity: 0.3; font-size: 50px; }
    to { transform: translateY(0%); opacity: 1; }
`

const Name = styled.div`
    color: white;
    text-transform: uppercase;
    text-align:center;

    p {
        font-size: 50px;
        font-weight: 600;
        padding: 16px 28px;
    }

    i{
        font-size: 70px;
        animation: ${slideFromTop} ease-in 1s;
    }
`

