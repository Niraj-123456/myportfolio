import React from 'react'
import styled from 'styled-components'

function About() {
    return (
        <Main id="about">
            <Heading>About Me</Heading>
            <Content>
                <Photo>
                    <i class="fas fa-user"></i>
                </Photo>
                <p>My Name is Niraj Lama. I am a Front End React Js Developer looking for an internship
                    opportunity. I live in Boudha-6, Tinchuli, Kathmandu. I am an undergraduated student and did
                    my bachelors in 2018 from Shanker Dev Campus in Bachelors in Information Management. I did my
                    +2 from St. Lawrence College and schooling from Gyanmala English High School.<br /><br />
                    Currently, I am working as a Digital Marketing Officer at Everest Soft Tech located in Basundhara,
                    Kathmandu. I always had the passion for Front End programming but did not get the change to start off 
                    my career in programming before. But I think it's never to late to start over. So, now I am teaching myself
                    to code and looking for an opportunity to kick start my career in Front End Development. <br /><br />
                    To sum up, I am a hard working guy and a problem solver.I have analytical thinking capabilities and good communicative 
                    skills. I consider my self a strong candidate not just of the technical skills but also non-technical skills 
                    that are as equally important as technical in any business firm. Thank You!
                </p>
            </Content>
        </Main>
    )
}

export default About

const Main = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 50px;
    height: 600px;
    color: #f9f9f9;
    letter-spacing: 2px;
`

const Heading = styled.h1`
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
`

const Content = styled.div`
    text-align: center;
    width: 80%;
    margin: 20px auto;
    
    p {
        line-height: 30px;
        font-size: 16px;
        font-weight: 300;
    }
`

const Photo = styled.div`
    background-color: #fff;
    border: solid 2px #fff;
    height: 200px;
    width: 200px;
    margin: auto;
    border-radius: 50%;
    overflow: hidden;

    i {
        margin-top: 5px;
        color: #000;
        font-size: 200px;   
    }
`