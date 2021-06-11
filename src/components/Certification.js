import React from 'react'
import styled from 'styled-components'

function Certification() {
    return (
        <Container id="certification">
            <h2>Certifications</h2>
            <Content>
                <p>Here are all the certicates from the completion of different online courses. The certificate provider includes 
                    Udemy, Cisco Acedemy, etc. The courses were 3 or more hours long and included basics concepts to advanced level 
                    knowledge. The courses were really helpful in the upliftment of my knowledge and skills.
                </p>
            </Content>
            <Certificate>
                <Card>
                    <a href="https://drive.google.com/file/d/1Vb4wLxcWBh-MnBQtPPVGochWuIQ0w5yJ/view?usp=sharing" target="_blank">
                        <img src="images/reactjs_certification_img.png"/></a>
                    <p>Sint nostrud in proident pariatur nisi incididunt commodo nisi sint. Reprehenderit non excepteur</p>
                </Card>
                <Card>
                    <a href="https://drive.google.com/file/d/1Vb4wLxcWBh-MnBQtPPVGochWuIQ0w5yJ/view?usp=sharing" target="_blank">
                        <img src="images/Reactjs-ES6-Certification.jpg"/></a>
                    <p>Sint nostrud in proident pariatur nisi incididunt commodo nisi sint. Reprehenderit non excepteur</p>
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
    box-shadow: 0px 5px 8px 3px rgba(0, 0, 0, 0.5);

    img {
        height: auto;
        width: 100%;
    }

    p {
        text-align: center;
        color: #fff;
        background-color: #051adb;
        padding: 50px 0;
        margin: 0;
    }
`