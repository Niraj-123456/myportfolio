import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const projectDataArr = [
    {
      id: '1',
      projectName: 'Basic JavaScript Project',
      projectImg: 'images/screenshot-niraj-123456.github.io-2021.05.26-20_47_53.png',
      projectDesc: 'This project is a basic javascript project which includes different apps such as rock, paper, scissor game, cat image generator using flex box, age convertor and lastly blackjack game.',
      completionDate: 'April 1, 2020'
    },
    {
      id: '2',
      projectName: 'Disney Plus Clone using Reactjs, Redux & Styled-Components',
      projectImg: 'https://previews.123rf.com/images/engkritchaya/engkritchaya1703/engkritchaya170300102/75165087-header-for-architect-concept-with-equipment-of-creative-project-background-architect-desk-.jpg',
      projectDesc: 'This project is a clone of disney plus app using reactjs, redux and styled components. This project includes firebase for a backend database for content and user login.',
      completionDate: 'May 1, 2020'
    },
    {
      id: '3',
      projectName: 'React Project Diary',
      projectImg: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3978884.jpg',
      projectDesc: 'This React project includes different apps such as tic tac toe game, clock app, timer and blackjack game using react hooks.',
      completionDate: 'June 1, 2020'
    },
    {
      id: '4',
      projectName: 'Project 4',
      projectImg: 'https://i.pinimg.com/736x/da/86/41/da86413d9c1d2fa2bdd1bffcc2504979.jpg',
      projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      completionDate: 'August 1, 2020'
    }
  ]

const projectData = projectDataArr.map((data, id) => {
    return(
        <Card key={data.id} projectName={data.projectName} projectImg={data.projectImg} 
        projectDesc={data.projectDesc} completed={data.completionDate}
        />
    )
});
function Home() {
    return (
        <Container id="home">
            <Main id="projects">
                <Heading>
                    My Projects
                </Heading>
                <CardContainer>
                    {projectData}
                </CardContainer>
            </Main>
        </Container>
    )
}

export default Home

const Container = styled.div`
    min-height: calc(100vh - 140px);
`

const Main = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 100px;
`

const Heading = styled.h1`
    text-align: center;
    color: #f9f9f9;
    text-transform: uppercase;
    font-weight: 300;
`

const CardContainer = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 50px;
    color: #f9f9f9;
    width: 100%;
`