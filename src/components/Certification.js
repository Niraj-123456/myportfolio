import React from 'react'
import styled from 'styled-components'

function Certification() {
    return (
        <Container id="certification">
            <h2>Certifications</h2>
            <Content>
                <p>Here are all the certificates from the completion of different online courses. The certificate provider includes 
                    Udemy, Cisco Acedemy, etc. The courses were 1 or more hours long and included basics concepts to advanced level 
                    knowledge. The courses were really helpful in the upliftment of my knowledge and skills.
                </p>
            </Content>
            <Certificate>
                <Card>
                    <img src="images/reactjs_certification_img.png" alt="Reactjs-certificate"/>
                    <p>This certificate is issued by Udemy to me for the completion of Complete ReactJs Course- Basics to Advanced (2021) 
                        online course on May 4, 2021.
                    </p>
                    <a href="https://drive.google.com/file/d/1Vb4wLxcWBh-MnBQtPPVGochWuIQ0w5yJ/view?usp=sharing" target="_blank">
                    <button>View Certificate</button></a>
                </Card>
                <Card>
                    <img src="images/Reactjs-ES6-Certification.jpg" alt="Reactjs-ES6-Cetificate"/>
                    <p>This certificate is issued by Udemy to me for the completion of Modern JavaScript for ReactJs- ES6 online course 
                        on May 28, 2021.
                    </p>
                    <a href="https://drive.google.com/file/d/1y8h_Tjx4xBlWvbzfNprdV13YMLLrxVNK/view?usp=sharing" target="_blank">
                    <button>View Certificate</button></a>
                </Card>
            </Certificate>
        </Container>
    )
}

export default Certification

const Container = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;
    letter-spacing: 2px;

    h2 {
        font-size: 30px;
        color: #f9f9f9;
        font-weight: 300;
        text-transform: uppercase;
    }
`

const Content = styled.div`
    text-align: center;
    color: #f9f9f9;

    p {
        font-size: 16px;
        font-weight: 300;
    }

`

const Certificate = styled.div`
    margin-top: 50px;
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
`

const Card = styled.div`
    background-color: #fff transparent;
    width: 100%;
    box-sizing: content-box;
    box-shadow: -5px 5px 5px 3px rgba(0, 0, 0, 0.5);

    img {
        height: auto;
        width: 100%;
    }

    p {
        text-align: center;
        color: #fff;
        padding: 20px 10px;
        margin: 0;
    }

    button {
        height: 40px;
        margin: 20px auto;
        border-radius: 4px;
        border: none;
        color: #fff;
        background-color: #355c7a;
        padding: 0 10px;
        font-size: 15px;
        letter-spacing: 2px;
        box-shadow: -2px 2px 5px 1px rgba(0, 0, 0, 0.5);
        transition: all 0.2s ease-in;
        cursor: pointer;

            &:hover {
                transform: scale(1.1, 1.1);
                background-color: #355aaa;
            }
    }
`