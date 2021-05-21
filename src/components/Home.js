import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <Main>
            <Background>
                <p>Welcome to my portfolio. Here you can view my projects and more.</p>
            </Background>
            <MainCard>
                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
                <h1>Main Project</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </MainCard>
            <Card>
                <CardImg>
                    <img src="https://i.pinimg.com/236x/71/28/3b/71283bb49db55cfee5bb6acd1389c465--tree-of-life-the-tree.jpg" />
                    <h1>#1 Project Name</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </CardImg>
                <CardImg>
                    <img src="https://i.pinimg.com/236x/71/28/3b/71283bb49db55cfee5bb6acd1389c465--tree-of-life-the-tree.jpg" />
                    <h1>#2 Project Name</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </CardImg>
                <CardImg>
                    <img src="https://i.pinimg.com/236x/71/28/3b/71283bb49db55cfee5bb6acd1389c465--tree-of-life-the-tree.jpg" />
                    <h1>#3 Project Name</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </CardImg>
            </Card>
        </Main>
    )
}

export default Home

const Main = styled.div`
    width: 90%;
    margin: auto;
`
const Background = styled.div`
    border: 1px solid white;
    background: white;
    color: #000;
    margin-top: 50px;
    text-align: center;
    box-shadow: 0 20px 30px 10px rgba(0, 0, 0, 0.5);
    border-radius: 2px;

    p {
        font-size: 20px;
        font-weight: 600;
    }
`

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    color: #f9f9f9;
`

const CardImg = styled.div`
    margin: 0 30px;
    text-align: center;
    border-radius: 2px;
    box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.5);

    img {
        height: 400px;
        width: 350px;
        box-sizing: border-box;
    }

    p {
        font-size: 15px;
        opacity: 0.8;
        width: 90%;
        margin: auto;
        padding: 8px 0;
    }
`

const MainCard = styled(CardImg)`
    width: 80%;
    margin: auto;
    margin-top: 50px;
    color: #f9f9f9;

    img {
        width: 100%;
    }

`

